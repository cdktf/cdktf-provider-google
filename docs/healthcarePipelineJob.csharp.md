# `healthcarePipelineJob` Submodule <a name="`healthcarePipelineJob` Submodule" id="@cdktf/provider-google.healthcarePipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcarePipelineJob <a name="HealthcarePipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job google_healthcare_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJob(Construct Scope, string Id, HealthcarePipelineJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig">HealthcarePipelineJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig">HealthcarePipelineJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putBackfillPipelineJob">PutBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putMappingPipelineJob">PutMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putReconciliationPipelineJob">PutReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetBackfillPipelineJob">ResetBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetDisableLineage">ResetDisableLineage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetMappingPipelineJob">ResetMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetReconciliationPipelineJob">ResetReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackfillPipelineJob` <a name="PutBackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putBackfillPipelineJob"></a>

```csharp
private void PutBackfillPipelineJob(HealthcarePipelineJobBackfillPipelineJob Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putBackfillPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

---

##### `PutMappingPipelineJob` <a name="PutMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putMappingPipelineJob"></a>

```csharp
private void PutMappingPipelineJob(HealthcarePipelineJobMappingPipelineJob Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putMappingPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

---

##### `PutReconciliationPipelineJob` <a name="PutReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putReconciliationPipelineJob"></a>

```csharp
private void PutReconciliationPipelineJob(HealthcarePipelineJobReconciliationPipelineJob Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putReconciliationPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putTimeouts"></a>

```csharp
private void PutTimeouts(HealthcarePipelineJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

---

##### `ResetBackfillPipelineJob` <a name="ResetBackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetBackfillPipelineJob"></a>

```csharp
private void ResetBackfillPipelineJob()
```

##### `ResetDisableLineage` <a name="ResetDisableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetDisableLineage"></a>

```csharp
private void ResetDisableLineage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMappingPipelineJob` <a name="ResetMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetMappingPipelineJob"></a>

```csharp
private void ResetMappingPipelineJob()
```

##### `ResetReconciliationPipelineJob` <a name="ResetReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetReconciliationPipelineJob"></a>

```csharp
private void ResetReconciliationPipelineJob()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcarePipelineJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcarePipelineJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcarePipelineJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcarePipelineJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcarePipelineJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HealthcarePipelineJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcarePipelineJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcarePipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HealthcarePipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJob">BackfillPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference">HealthcarePipelineJobBackfillPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJob">MappingPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference">HealthcarePipelineJobMappingPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJob">ReconciliationPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference">HealthcarePipelineJobReconciliationPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference">HealthcarePipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJobInput">BackfillPipelineJobInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineageInput">DisableLineageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJobInput">MappingPipelineJobInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJobInput">ReconciliationPipelineJobInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineage">DisableLineage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackfillPipelineJob`<sup>Required</sup> <a name="BackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJob"></a>

```csharp
public HealthcarePipelineJobBackfillPipelineJobOutputReference BackfillPipelineJob { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference">HealthcarePipelineJobBackfillPipelineJobOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MappingPipelineJob`<sup>Required</sup> <a name="MappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJob"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobOutputReference MappingPipelineJob { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference">HealthcarePipelineJobMappingPipelineJobOutputReference</a>

---

##### `ReconciliationPipelineJob`<sup>Required</sup> <a name="ReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJob"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJobOutputReference ReconciliationPipelineJob { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference">HealthcarePipelineJobReconciliationPipelineJobOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeouts"></a>

```csharp
public HealthcarePipelineJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference">HealthcarePipelineJobTimeoutsOutputReference</a>

---

##### `BackfillPipelineJobInput`<sup>Optional</sup> <a name="BackfillPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJobInput"></a>

```csharp
public HealthcarePipelineJobBackfillPipelineJob BackfillPipelineJobInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DisableLineageInput`<sup>Optional</sup> <a name="DisableLineageInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineageInput"></a>

```csharp
public object DisableLineageInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MappingPipelineJobInput`<sup>Optional</sup> <a name="MappingPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJobInput"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJob MappingPipelineJobInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReconciliationPipelineJobInput`<sup>Optional</sup> <a name="ReconciliationPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJobInput"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJob ReconciliationPipelineJobInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `DisableLineage`<sup>Required</sup> <a name="DisableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineage"></a>

```csharp
public object DisableLineage { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcarePipelineJobBackfillPipelineJob <a name="HealthcarePipelineJobBackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobBackfillPipelineJob {
    string MappingPipelineJob = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob">MappingPipelineJob</a></code> | <code>string</code> | Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}. |

---

##### `MappingPipelineJob`<sup>Optional</sup> <a name="MappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob"></a>

```csharp
public string MappingPipelineJob { get; set; }
```

- *Type:* string

Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#mapping_pipeline_job HealthcarePipelineJob#mapping_pipeline_job}

---

### HealthcarePipelineJobConfig <a name="HealthcarePipelineJobConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Dataset,
    string Location,
    string Name,
    HealthcarePipelineJobBackfillPipelineJob BackfillPipelineJob = null,
    object DisableLineage = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    HealthcarePipelineJobMappingPipelineJob MappingPipelineJob = null,
    HealthcarePipelineJobReconciliationPipelineJob ReconciliationPipelineJob = null,
    HealthcarePipelineJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dataset">Dataset</a></code> | <code>string</code> | Healthcare Dataset under which the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.location">Location</a></code> | <code>string</code> | Location where the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the pipeline job. This field is user-assigned. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.backfillPipelineJob">BackfillPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | backfill_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.disableLineage">DisableLineage</a></code> | <code>object</code> | If true, disables writing lineage for the pipeline. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#id HealthcarePipelineJob#id}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-supplied key-value pairs used to organize Pipeline Jobs. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.mappingPipelineJob">MappingPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | mapping_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.reconciliationPipelineJob">ReconciliationPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | reconciliation_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

Healthcare Dataset under which the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#dataset HealthcarePipelineJob#dataset}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location where the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#location HealthcarePipelineJob#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the pipeline job. This field is user-assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#name HealthcarePipelineJob#name}

---

##### `BackfillPipelineJob`<sup>Optional</sup> <a name="BackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.backfillPipelineJob"></a>

```csharp
public HealthcarePipelineJobBackfillPipelineJob BackfillPipelineJob { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

backfill_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#backfill_pipeline_job HealthcarePipelineJob#backfill_pipeline_job}

---

##### `DisableLineage`<sup>Optional</sup> <a name="DisableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.disableLineage"></a>

```csharp
public object DisableLineage { get; set; }
```

- *Type:* object

If true, disables writing lineage for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#disable_lineage HealthcarePipelineJob#disable_lineage}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#id HealthcarePipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-supplied key-value pairs used to organize Pipeline Jobs.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, and must conform to the following PCRE regular expression:
[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}*-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a
UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE
regular expression: [\p{Ll}\p{Lo}\p{N}*-]{0,63}
No more than 64 labels can be associated with a given pipeline.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#labels HealthcarePipelineJob#labels}

---

##### `MappingPipelineJob`<sup>Optional</sup> <a name="MappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.mappingPipelineJob"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJob MappingPipelineJob { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

mapping_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#mapping_pipeline_job HealthcarePipelineJob#mapping_pipeline_job}

---

##### `ReconciliationPipelineJob`<sup>Optional</sup> <a name="ReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.reconciliationPipelineJob"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJob ReconciliationPipelineJob { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

reconciliation_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#reconciliation_pipeline_job HealthcarePipelineJob#reconciliation_pipeline_job}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.timeouts"></a>

```csharp
public HealthcarePipelineJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#timeouts HealthcarePipelineJob#timeouts}

---

### HealthcarePipelineJobMappingPipelineJob <a name="HealthcarePipelineJobMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobMappingPipelineJob {
    HealthcarePipelineJobMappingPipelineJobMappingConfig MappingConfig,
    string FhirStoreDestination = null,
    HealthcarePipelineJobMappingPipelineJobFhirStreamingSource FhirStreamingSource = null,
    object ReconciliationDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.mappingConfig">MappingConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | mapping_config block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination">FhirStoreDestination</a></code> | <code>string</code> | If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource">FhirStreamingSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | fhir_streaming_source block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination">ReconciliationDestination</a></code> | <code>object</code> | If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset. |

---

##### `MappingConfig`<sup>Required</sup> <a name="MappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.mappingConfig"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobMappingConfig MappingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

mapping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#mapping_config HealthcarePipelineJob#mapping_config}

---

##### `FhirStoreDestination`<sup>Optional</sup> <a name="FhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination"></a>

```csharp
public string FhirStoreDestination { get; set; }
```

- *Type:* string

If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs.

You must
grant your pipeline project's Cloud Healthcare Service
Agent serviceaccount healthcare.fhirResources.executeBundle
and healthcare.fhirResources.create permissions on the
destination store. The destination store must set
[disableReferentialIntegrity][FhirStore.disable_referential_integrity]
to true. The destination store must use FHIR version R4.
Format: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{fhirStoreID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#fhir_store_destination HealthcarePipelineJob#fhir_store_destination}

---

##### `FhirStreamingSource`<sup>Optional</sup> <a name="FhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobFhirStreamingSource FhirStreamingSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

fhir_streaming_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#fhir_streaming_source HealthcarePipelineJob#fhir_streaming_source}

---

##### `ReconciliationDestination`<sup>Optional</sup> <a name="ReconciliationDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination"></a>

```csharp
public object ReconciliationDestination { get; set; }
```

- *Type:* object

If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset.

A reconciliation
pipeline must exist in this dataset before a mapping pipeline
with a reconciliation destination can be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#reconciliation_destination HealthcarePipelineJob#reconciliation_destination}

---

### HealthcarePipelineJobMappingPipelineJobFhirStreamingSource <a name="HealthcarePipelineJobMappingPipelineJobFhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobMappingPipelineJobFhirStreamingSource {
    string FhirStore,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore">FhirStore</a></code> | <code>string</code> | The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description">Description</a></code> | <code>string</code> | Describes the streaming FHIR data source. |

---

##### `FhirStore`<sup>Required</sup> <a name="FhirStore" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore"></a>

```csharp
public string FhirStore { get; set; }
```

- *Type:* string

The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#fhir_store HealthcarePipelineJob#fhir_store}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Describes the streaming FHIR data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#description HealthcarePipelineJob#description}

---

### HealthcarePipelineJobMappingPipelineJobMappingConfig <a name="HealthcarePipelineJobMappingPipelineJobMappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobMappingPipelineJobMappingConfig {
    string Description = null,
    HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource WhistleConfigSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.description">Description</a></code> | <code>string</code> | Describes the mapping configuration. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource">WhistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | whistle_config_source block. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#description HealthcarePipelineJob#description}

---

##### `WhistleConfigSource`<sup>Optional</sup> <a name="WhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource WhistleConfigSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#whistle_config_source HealthcarePipelineJob#whistle_config_source}

---

### HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource <a name="HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource {
    string ImportUriPrefix,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix">ImportUriPrefix</a></code> | <code>string</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri">Uri</a></code> | <code>string</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `ImportUriPrefix`<sup>Required</sup> <a name="ImportUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix"></a>

```csharp
public string ImportUriPrefix { get; set; }
```

- *Type:* string

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#import_uri_prefix HealthcarePipelineJob#import_uri_prefix}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#uri HealthcarePipelineJob#uri}

---

### HealthcarePipelineJobReconciliationPipelineJob <a name="HealthcarePipelineJobReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobReconciliationPipelineJob {
    string MatchingUriPrefix,
    HealthcarePipelineJobReconciliationPipelineJobMergeConfig MergeConfig,
    string FhirStoreDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix">MatchingUriPrefix</a></code> | <code>string</code> | Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig">MergeConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | merge_config block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination">FhirStoreDestination</a></code> | <code>string</code> | The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}. |

---

##### `MatchingUriPrefix`<sup>Required</sup> <a name="MatchingUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix"></a>

```csharp
public string MatchingUriPrefix { get; set; }
```

- *Type:* string

Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on.

Example: gs://{bucket-id}/{path/to/matching/configs}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#matching_uri_prefix HealthcarePipelineJob#matching_uri_prefix}

---

##### `MergeConfig`<sup>Required</sup> <a name="MergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJobMergeConfig MergeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

merge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#merge_config HealthcarePipelineJob#merge_config}

---

##### `FhirStoreDestination`<sup>Optional</sup> <a name="FhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination"></a>

```csharp
public string FhirStoreDestination { get; set; }
```

- *Type:* string

The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#fhir_store_destination HealthcarePipelineJob#fhir_store_destination}

---

### HealthcarePipelineJobReconciliationPipelineJobMergeConfig <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobReconciliationPipelineJobMergeConfig {
    HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource WhistleConfigSource,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource">WhistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | whistle_config_source block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description">Description</a></code> | <code>string</code> | Describes the mapping configuration. |

---

##### `WhistleConfigSource`<sup>Required</sup> <a name="WhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource WhistleConfigSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#whistle_config_source HealthcarePipelineJob#whistle_config_source}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#description HealthcarePipelineJob#description}

---

### HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource {
    string ImportUriPrefix,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix">ImportUriPrefix</a></code> | <code>string</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri">Uri</a></code> | <code>string</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `ImportUriPrefix`<sup>Required</sup> <a name="ImportUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix"></a>

```csharp
public string ImportUriPrefix { get; set; }
```

- *Type:* string

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#import_uri_prefix HealthcarePipelineJob#import_uri_prefix}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#uri HealthcarePipelineJob#uri}

---

### HealthcarePipelineJobTimeouts <a name="HealthcarePipelineJobTimeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#create HealthcarePipelineJob#create}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#delete HealthcarePipelineJob#delete}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#update HealthcarePipelineJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#create HealthcarePipelineJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#delete HealthcarePipelineJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/healthcare_pipeline_job#update HealthcarePipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcarePipelineJobBackfillPipelineJobOutputReference <a name="HealthcarePipelineJobBackfillPipelineJobOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobBackfillPipelineJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob">ResetMappingPipelineJob</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMappingPipelineJob` <a name="ResetMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob"></a>

```csharp
private void ResetMappingPipelineJob()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput">MappingPipelineJobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob">MappingPipelineJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MappingPipelineJobInput`<sup>Optional</sup> <a name="MappingPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput"></a>

```csharp
public string MappingPipelineJobInput { get; }
```

- *Type:* string

---

##### `MappingPipelineJob`<sup>Required</sup> <a name="MappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob"></a>

```csharp
public string MappingPipelineJob { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue"></a>

```csharp
public HealthcarePipelineJobBackfillPipelineJob InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

---


### HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference <a name="HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput">FhirStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore">FhirStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FhirStoreInput`<sup>Optional</sup> <a name="FhirStoreInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput"></a>

```csharp
public string FhirStoreInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FhirStore`<sup>Required</sup> <a name="FhirStore" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore"></a>

```csharp
public string FhirStore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobFhirStreamingSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---


### HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference <a name="HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource">PutWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource">ResetWhistleConfigSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWhistleConfigSource` <a name="PutWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource"></a>

```csharp
private void PutWhistleConfigSource(HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetWhistleConfigSource` <a name="ResetWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource"></a>

```csharp
private void ResetWhistleConfigSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource">WhistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput">WhistleConfigSourceInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WhistleConfigSource`<sup>Required</sup> <a name="WhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference WhistleConfigSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `WhistleConfigSourceInput`<sup>Optional</sup> <a name="WhistleConfigSourceInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource WhistleConfigSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobMappingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---


### HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference <a name="HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">ImportUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix">ImportUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImportUriPrefixInput`<sup>Optional</sup> <a name="ImportUriPrefixInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```csharp
public string ImportUriPrefixInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `ImportUriPrefix`<sup>Required</sup> <a name="ImportUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```csharp
public string ImportUriPrefix { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---


### HealthcarePipelineJobMappingPipelineJobOutputReference <a name="HealthcarePipelineJobMappingPipelineJobOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobMappingPipelineJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource">PutFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig">PutMappingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination">ResetFhirStoreDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource">ResetFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination">ResetReconciliationDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFhirStreamingSource` <a name="PutFhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource"></a>

```csharp
private void PutFhirStreamingSource(HealthcarePipelineJobMappingPipelineJobFhirStreamingSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---

##### `PutMappingConfig` <a name="PutMappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig"></a>

```csharp
private void PutMappingConfig(HealthcarePipelineJobMappingPipelineJobMappingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---

##### `ResetFhirStoreDestination` <a name="ResetFhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination"></a>

```csharp
private void ResetFhirStoreDestination()
```

##### `ResetFhirStreamingSource` <a name="ResetFhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource"></a>

```csharp
private void ResetFhirStreamingSource()
```

##### `ResetReconciliationDestination` <a name="ResetReconciliationDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination"></a>

```csharp
private void ResetReconciliationDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource">FhirStreamingSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig">MappingConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput">FhirStoreDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput">FhirStreamingSourceInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput">MappingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput">ReconciliationDestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination">FhirStoreDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination">ReconciliationDestination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FhirStreamingSource`<sup>Required</sup> <a name="FhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference FhirStreamingSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a>

---

##### `MappingConfig`<sup>Required</sup> <a name="MappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference MappingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a>

---

##### `FhirStoreDestinationInput`<sup>Optional</sup> <a name="FhirStoreDestinationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```csharp
public string FhirStoreDestinationInput { get; }
```

- *Type:* string

---

##### `FhirStreamingSourceInput`<sup>Optional</sup> <a name="FhirStreamingSourceInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobFhirStreamingSource FhirStreamingSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---

##### `MappingConfigInput`<sup>Optional</sup> <a name="MappingConfigInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJobMappingConfig MappingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---

##### `ReconciliationDestinationInput`<sup>Optional</sup> <a name="ReconciliationDestinationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput"></a>

```csharp
public object ReconciliationDestinationInput { get; }
```

- *Type:* object

---

##### `FhirStoreDestination`<sup>Required</sup> <a name="FhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination"></a>

```csharp
public string FhirStoreDestination { get; }
```

- *Type:* string

---

##### `ReconciliationDestination`<sup>Required</sup> <a name="ReconciliationDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination"></a>

```csharp
public object ReconciliationDestination { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue"></a>

```csharp
public HealthcarePipelineJobMappingPipelineJob InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

---


### HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource">PutWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWhistleConfigSource` <a name="PutWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource"></a>

```csharp
private void PutWhistleConfigSource(HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource">WhistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput">WhistleConfigSourceInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WhistleConfigSource`<sup>Required</sup> <a name="WhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference WhistleConfigSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `WhistleConfigSourceInput`<sup>Optional</sup> <a name="WhistleConfigSourceInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource WhistleConfigSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJobMergeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---


### HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">ImportUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix">ImportUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImportUriPrefixInput`<sup>Optional</sup> <a name="ImportUriPrefixInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```csharp
public string ImportUriPrefixInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `ImportUriPrefix`<sup>Required</sup> <a name="ImportUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```csharp
public string ImportUriPrefix { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---


### HealthcarePipelineJobReconciliationPipelineJobOutputReference <a name="HealthcarePipelineJobReconciliationPipelineJobOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobReconciliationPipelineJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig">PutMergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination">ResetFhirStoreDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMergeConfig` <a name="PutMergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig"></a>

```csharp
private void PutMergeConfig(HealthcarePipelineJobReconciliationPipelineJobMergeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---

##### `ResetFhirStoreDestination` <a name="ResetFhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination"></a>

```csharp
private void ResetFhirStoreDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig">MergeConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput">FhirStoreDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput">MatchingUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput">MergeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination">FhirStoreDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix">MatchingUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MergeConfig`<sup>Required</sup> <a name="MergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference MergeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a>

---

##### `FhirStoreDestinationInput`<sup>Optional</sup> <a name="FhirStoreDestinationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```csharp
public string FhirStoreDestinationInput { get; }
```

- *Type:* string

---

##### `MatchingUriPrefixInput`<sup>Optional</sup> <a name="MatchingUriPrefixInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput"></a>

```csharp
public string MatchingUriPrefixInput { get; }
```

- *Type:* string

---

##### `MergeConfigInput`<sup>Optional</sup> <a name="MergeConfigInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJobMergeConfig MergeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---

##### `FhirStoreDestination`<sup>Required</sup> <a name="FhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination"></a>

```csharp
public string FhirStoreDestination { get; }
```

- *Type:* string

---

##### `MatchingUriPrefix`<sup>Required</sup> <a name="MatchingUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix"></a>

```csharp
public string MatchingUriPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue"></a>

```csharp
public HealthcarePipelineJobReconciliationPipelineJob InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

---


### HealthcarePipelineJobTimeoutsOutputReference <a name="HealthcarePipelineJobTimeoutsOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcarePipelineJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



