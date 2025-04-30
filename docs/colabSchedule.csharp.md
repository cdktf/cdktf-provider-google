# `colabSchedule` Submodule <a name="`colabSchedule` Submodule" id="@cdktf/provider-google.colabSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabSchedule <a name="ColabSchedule" id="@cdktf/provider-google.colabSchedule.ColabSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule google_colab_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabSchedule(Construct Scope, string Id, ColabScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig">ColabScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig">ColabScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.putCreateNotebookExecutionJobRequest">PutCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetAllowQueueing">ResetAllowQueueing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetMaxRunCount">ResetMaxRunCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.colabSchedule.ColabSchedule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCreateNotebookExecutionJobRequest` <a name="PutCreateNotebookExecutionJobRequest" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putCreateNotebookExecutionJobRequest"></a>

```csharp
private void PutCreateNotebookExecutionJobRequest(ColabScheduleCreateNotebookExecutionJobRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putCreateNotebookExecutionJobRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts"></a>

```csharp
private void PutTimeouts(ColabScheduleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>

---

##### `ResetAllowQueueing` <a name="ResetAllowQueueing" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetAllowQueueing"></a>

```csharp
private void ResetAllowQueueing()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetDesiredState"></a>

```csharp
private void ResetDesiredState()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxRunCount` <a name="ResetMaxRunCount" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetMaxRunCount"></a>

```csharp
private void ResetMaxRunCount()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ColabSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ColabSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ColabSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ColabSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ColabSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequest">CreateNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference">ColabScheduleCreateNotebookExecutionJobRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference">ColabScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueingInput">AllowQueueingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequestInput">CreateNotebookExecutionJobRequestInput</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.cronInput">CronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredStateInput">DesiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCountInput">MaxConcurrentRunCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCountInput">MaxRunCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueing">AllowQueueing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.cron">Cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredState">DesiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCount">MaxConcurrentRunCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCount">MaxRunCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateNotebookExecutionJobRequest`<sup>Required</sup> <a name="CreateNotebookExecutionJobRequest" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequest"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestOutputReference CreateNotebookExecutionJobRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference">ColabScheduleCreateNotebookExecutionJobRequestOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeouts"></a>

```csharp
public ColabScheduleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference">ColabScheduleTimeoutsOutputReference</a>

---

##### `AllowQueueingInput`<sup>Optional</sup> <a name="AllowQueueingInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueingInput"></a>

```csharp
public object AllowQueueingInput { get; }
```

- *Type:* object

---

##### `CreateNotebookExecutionJobRequestInput`<sup>Optional</sup> <a name="CreateNotebookExecutionJobRequestInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequestInput"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequest CreateNotebookExecutionJobRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.cronInput"></a>

```csharp
public string CronInput { get; }
```

- *Type:* string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredStateInput"></a>

```csharp
public string DesiredStateInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaxConcurrentRunCountInput`<sup>Optional</sup> <a name="MaxConcurrentRunCountInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCountInput"></a>

```csharp
public string MaxConcurrentRunCountInput { get; }
```

- *Type:* string

---

##### `MaxRunCountInput`<sup>Optional</sup> <a name="MaxRunCountInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCountInput"></a>

```csharp
public string MaxRunCountInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowQueueing`<sup>Required</sup> <a name="AllowQueueing" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueing"></a>

```csharp
public object AllowQueueing { get; }
```

- *Type:* object

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.cron"></a>

```csharp
public string Cron { get; }
```

- *Type:* string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredState"></a>

```csharp
public string DesiredState { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaxConcurrentRunCount`<sup>Required</sup> <a name="MaxConcurrentRunCount" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCount"></a>

```csharp
public string MaxConcurrentRunCount { get; }
```

- *Type:* string

---

##### `MaxRunCount`<sup>Required</sup> <a name="MaxRunCount" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCount"></a>

```csharp
public string MaxRunCount { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabScheduleConfig <a name="ColabScheduleConfig" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ColabScheduleCreateNotebookExecutionJobRequest CreateNotebookExecutionJobRequest,
    string Cron,
    string DisplayName,
    string Location,
    string MaxConcurrentRunCount,
    object AllowQueueing = null,
    string DesiredState = null,
    string EndTime = null,
    string Id = null,
    string MaxRunCount = null,
    string Project = null,
    string StartTime = null,
    ColabScheduleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.createNotebookExecutionJobRequest">CreateNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | create_notebook_execution_job_request block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.cron">Cron</a></code> | <code>string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. The display name of the Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxConcurrentRunCount">MaxConcurrentRunCount</a></code> | <code>string</code> | Maximum number of runs that can be started concurrently for this Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.allowQueueing">AllowQueueing</a></code> | <code>object</code> | Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.desiredState">DesiredState</a></code> | <code>string</code> | Desired state of the Colab Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.endTime">EndTime</a></code> | <code>string</code> | Timestamp after which no new runs can be scheduled. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#id ColabSchedule#id}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxRunCount">MaxRunCount</a></code> | <code>string</code> | Maximum run count of the schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#project ColabSchedule#project}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.startTime">StartTime</a></code> | <code>string</code> | The timestamp after which the first run can be scheduled. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CreateNotebookExecutionJobRequest`<sup>Required</sup> <a name="CreateNotebookExecutionJobRequest" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.createNotebookExecutionJobRequest"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequest CreateNotebookExecutionJobRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

create_notebook_execution_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#create_notebook_execution_job_request ColabSchedule#create_notebook_execution_job_request}

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.cron"></a>

```csharp
public string Cron { get; set; }
```

- *Type:* string

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#cron ColabSchedule#cron}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required. The display name of the Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#location ColabSchedule#location}

---

##### `MaxConcurrentRunCount`<sup>Required</sup> <a name="MaxConcurrentRunCount" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxConcurrentRunCount"></a>

```csharp
public string MaxConcurrentRunCount { get; set; }
```

- *Type:* string

Maximum number of runs that can be started concurrently for this Schedule.

This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#max_concurrent_run_count ColabSchedule#max_concurrent_run_count}

---

##### `AllowQueueing`<sup>Optional</sup> <a name="AllowQueueing" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.allowQueueing"></a>

```csharp
public object AllowQueueing { get; set; }
```

- *Type:* object

Whether new scheduled runs can be queued when max_concurrent_runs limit is reached.

If set to true, new runs will be queued instead of skipped. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#allow_queueing ColabSchedule#allow_queueing}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.desiredState"></a>

```csharp
public string DesiredState { get; set; }
```

- *Type:* string

Desired state of the Colab Schedule.

Set this field to 'ACTIVE' to start/resume the schedule, and 'PAUSED' to pause the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#desired_state ColabSchedule#desired_state}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Timestamp after which no new runs can be scheduled.

If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#end_time ColabSchedule#end_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#id ColabSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxRunCount`<sup>Optional</sup> <a name="MaxRunCount" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxRunCount"></a>

```csharp
public string MaxRunCount { get; set; }
```

- *Type:* string

Maximum run count of the schedule.

If specified, The schedule will be completed when either startedRunCount >= maxRunCount or when endTime is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#max_run_count ColabSchedule#max_run_count}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#project ColabSchedule#project}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The timestamp after which the first run can be scheduled.

Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#start_time ColabSchedule#start_time}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.timeouts"></a>

```csharp
public ColabScheduleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#timeouts ColabSchedule#timeouts}

---

### ColabScheduleCreateNotebookExecutionJobRequest <a name="ColabScheduleCreateNotebookExecutionJobRequest" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleCreateNotebookExecutionJobRequest {
    ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob NotebookExecutionJob
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob">NotebookExecutionJob</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | notebook_execution_job block. |

---

##### `NotebookExecutionJob`<sup>Required</sup> <a name="NotebookExecutionJob" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob NotebookExecutionJob { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

notebook_execution_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#notebook_execution_job ColabSchedule#notebook_execution_job}

---

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob {
    string DisplayName,
    string GcsOutputUri,
    string NotebookRuntimeTemplateResourceName,
    ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource DataformRepositorySource = null,
    string ExecutionTimeout = null,
    string ExecutionUser = null,
    ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource GcsNotebookSource = null,
    string ServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName">DisplayName</a></code> | <code>string</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri">GcsOutputUri</a></code> | <code>string</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout">ExecutionTimeout</a></code> | <code>string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser">ExecutionUser</a></code> | <code>string</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account to run the execution as. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri"></a>

```csharp
public string GcsOutputUri { get; set; }
```

- *Type:* string

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#gcs_output_uri ColabSchedule#gcs_output_uri}

---

##### `NotebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName"></a>

```csharp
public string NotebookRuntimeTemplateResourceName { get; set; }
```

- *Type:* string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#notebook_runtime_template_resource_name ColabSchedule#notebook_runtime_template_resource_name}

---

##### `DataformRepositorySource`<sup>Optional</sup> <a name="DataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource DataformRepositorySource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#dataform_repository_source ColabSchedule#dataform_repository_source}

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout"></a>

```csharp
public string ExecutionTimeout { get; set; }
```

- *Type:* string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

A duration in seconds with up to nine fractional digits, ending with "s". Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#execution_timeout ColabSchedule#execution_timeout}

---

##### `ExecutionUser`<sup>Optional</sup> <a name="ExecutionUser" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser"></a>

```csharp
public string ExecutionUser { get; set; }
```

- *Type:* string

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#execution_user ColabSchedule#execution_user}

---

##### `GcsNotebookSource`<sup>Optional</sup> <a name="GcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource GcsNotebookSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#gcs_notebook_source ColabSchedule#gcs_notebook_source}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#service_account ColabSchedule#service_account}

---

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource {
    string DataformRepositoryResourceName,
    string CommitSha = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>string</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha">CommitSha</a></code> | <code>string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```csharp
public string DataformRepositoryResourceName { get; set; }
```

- *Type:* string

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#dataform_repository_resource_name ColabSchedule#dataform_repository_resource_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha"></a>

```csharp
public string CommitSha { get; set; }
```

- *Type:* string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#commit_sha ColabSchedule#commit_sha}

---

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource {
    string Uri,
    string Generation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri">Uri</a></code> | <code>string</code> | The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation">Generation</a></code> | <code>string</code> | The version of the Cloud Storage object to read. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#uri ColabSchedule#uri}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation"></a>

```csharp
public string Generation { get; set; }
```

- *Type:* string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#generation ColabSchedule#generation}

---

### ColabScheduleTimeouts <a name="ColabScheduleTimeouts" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#create ColabSchedule#create}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#delete ColabSchedule#delete}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#update ColabSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#create ColabSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#delete ColabSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/colab_schedule#update ColabSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha"></a>

```csharp
private void ResetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">DataformRepositoryResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha">CommitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```csharp
public string CommitShaInput { get; }
```

- *Type:* string

---

##### `DataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="DataformRepositoryResourceNameInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```csharp
public string DataformRepositoryResourceNameInput { get; }
```

- *Type:* string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha"></a>

```csharp
public string CommitSha { get; }
```

- *Type:* string

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```csharp
public string DataformRepositoryResourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---


### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration"></a>

```csharp
private void ResetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation">Generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput"></a>

```csharp
public string GenerationInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation"></a>

```csharp
public string Generation { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---


### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource">PutDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource">PutGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource">ResetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser">ResetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource">ResetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataformRepositorySource` <a name="PutDataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource"></a>

```csharp
private void PutDataformRepositorySource(ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `PutGcsNotebookSource` <a name="PutGcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource"></a>

```csharp
private void PutGcsNotebookSource(ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `ResetDataformRepositorySource` <a name="ResetDataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource"></a>

```csharp
private void ResetDataformRepositorySource()
```

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout"></a>

```csharp
private void ResetExecutionTimeout()
```

##### `ResetExecutionUser` <a name="ResetExecutionUser" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser"></a>

```csharp
private void ResetExecutionUser()
```

##### `ResetGcsNotebookSource` <a name="ResetGcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource"></a>

```csharp
private void ResetGcsNotebookSource()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput">DataformRepositorySourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput">ExecutionUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput">GcsNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput">GcsOutputUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput">NotebookRuntimeTemplateResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout">ExecutionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser">ExecutionUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri">GcsOutputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataformRepositorySource`<sup>Required</sup> <a name="DataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference DataformRepositorySource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a>

---

##### `GcsNotebookSource`<sup>Required</sup> <a name="GcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference GcsNotebookSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a>

---

##### `DataformRepositorySourceInput`<sup>Optional</sup> <a name="DataformRepositorySourceInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource DataformRepositorySourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput"></a>

```csharp
public string ExecutionTimeoutInput { get; }
```

- *Type:* string

---

##### `ExecutionUserInput`<sup>Optional</sup> <a name="ExecutionUserInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput"></a>

```csharp
public string ExecutionUserInput { get; }
```

- *Type:* string

---

##### `GcsNotebookSourceInput`<sup>Optional</sup> <a name="GcsNotebookSourceInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource GcsNotebookSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `GcsOutputUriInput`<sup>Optional</sup> <a name="GcsOutputUriInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput"></a>

```csharp
public string GcsOutputUriInput { get; }
```

- *Type:* string

---

##### `NotebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceNameInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput"></a>

```csharp
public string NotebookRuntimeTemplateResourceNameInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout"></a>

```csharp
public string ExecutionTimeout { get; }
```

- *Type:* string

---

##### `ExecutionUser`<sup>Required</sup> <a name="ExecutionUser" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser"></a>

```csharp
public string ExecutionUser { get; }
```

- *Type:* string

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri"></a>

```csharp
public string GcsOutputUri { get; }
```

- *Type:* string

---

##### `NotebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName"></a>

```csharp
public string NotebookRuntimeTemplateResourceName { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---


### ColabScheduleCreateNotebookExecutionJobRequestOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleCreateNotebookExecutionJobRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob">PutNotebookExecutionJob</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotebookExecutionJob` <a name="PutNotebookExecutionJob" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob"></a>

```csharp
private void PutNotebookExecutionJob(ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob">NotebookExecutionJob</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput">NotebookExecutionJobInput</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotebookExecutionJob`<sup>Required</sup> <a name="NotebookExecutionJob" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference NotebookExecutionJob { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a>

---

##### `NotebookExecutionJobInput`<sup>Optional</sup> <a name="NotebookExecutionJobInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob NotebookExecutionJobInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue"></a>

```csharp
public ColabScheduleCreateNotebookExecutionJobRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

---


### ColabScheduleTimeoutsOutputReference <a name="ColabScheduleTimeoutsOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabScheduleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



