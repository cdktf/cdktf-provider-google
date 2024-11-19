# `spannerBackupSchedule` Submodule <a name="`spannerBackupSchedule` Submodule" id="@cdktf/provider-google.spannerBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerBackupSchedule <a name="SpannerBackupSchedule" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule google_spanner_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupSchedule(Construct Scope, string Id, SpannerBackupScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig">SpannerBackupScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig">SpannerBackupScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putFullBackupSpec">PutFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putIncrementalBackupSpec">PutIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetFullBackupSpec">ResetFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetIncrementalBackupSpec">ResetIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFullBackupSpec` <a name="PutFullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putFullBackupSpec"></a>

```csharp
private void PutFullBackupSpec(SpannerBackupScheduleFullBackupSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putFullBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

---

##### `PutIncrementalBackupSpec` <a name="PutIncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putIncrementalBackupSpec"></a>

```csharp
private void PutIncrementalBackupSpec(SpannerBackupScheduleIncrementalBackupSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putIncrementalBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putSpec"></a>

```csharp
private void PutSpec(SpannerBackupScheduleSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts"></a>

```csharp
private void PutTimeouts(SpannerBackupScheduleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>

---

##### `ResetFullBackupSpec` <a name="ResetFullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetFullBackupSpec"></a>

```csharp
private void ResetFullBackupSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncrementalBackupSpec` <a name="ResetIncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetIncrementalBackupSpec"></a>

```csharp
private void ResetIncrementalBackupSpec()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetSpec"></a>

```csharp
private void ResetSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpannerBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SpannerBackupSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SpannerBackupSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SpannerBackupSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SpannerBackupSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpannerBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpannerBackupSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpannerBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpannerBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpec">FullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference">SpannerBackupScheduleFullBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpec">IncrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference">SpannerBackupScheduleIncrementalBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference">SpannerBackupScheduleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference">SpannerBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpecInput">FullBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpecInput">IncrementalBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDurationInput">RetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDuration">RetentionDuration</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FullBackupSpec`<sup>Required</sup> <a name="FullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpec"></a>

```csharp
public SpannerBackupScheduleFullBackupSpecOutputReference FullBackupSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference">SpannerBackupScheduleFullBackupSpecOutputReference</a>

---

##### `IncrementalBackupSpec`<sup>Required</sup> <a name="IncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpec"></a>

```csharp
public SpannerBackupScheduleIncrementalBackupSpecOutputReference IncrementalBackupSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference">SpannerBackupScheduleIncrementalBackupSpecOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.spec"></a>

```csharp
public SpannerBackupScheduleSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference">SpannerBackupScheduleSpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeouts"></a>

```csharp
public SpannerBackupScheduleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference">SpannerBackupScheduleTimeoutsOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `FullBackupSpecInput`<sup>Optional</sup> <a name="FullBackupSpecInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpecInput"></a>

```csharp
public SpannerBackupScheduleFullBackupSpec FullBackupSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncrementalBackupSpecInput`<sup>Optional</sup> <a name="IncrementalBackupSpecInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpecInput"></a>

```csharp
public SpannerBackupScheduleIncrementalBackupSpec IncrementalBackupSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RetentionDurationInput`<sup>Optional</sup> <a name="RetentionDurationInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDurationInput"></a>

```csharp
public string RetentionDurationInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.specInput"></a>

```csharp
public SpannerBackupScheduleSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDuration"></a>

```csharp
public string RetentionDuration { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerBackupScheduleConfig <a name="SpannerBackupScheduleConfig" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string Instance,
    string RetentionDuration,
    SpannerBackupScheduleFullBackupSpec FullBackupSpec = null,
    string Id = null,
    SpannerBackupScheduleIncrementalBackupSpec IncrementalBackupSpec = null,
    string Name = null,
    string Project = null,
    SpannerBackupScheduleSpec Spec = null,
    SpannerBackupScheduleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.database">Database</a></code> | <code>string</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.instance">Instance</a></code> | <code>string</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.retentionDuration">RetentionDuration</a></code> | <code>string</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.fullBackupSpec">FullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#id SpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.incrementalBackupSpec">IncrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.name">Name</a></code> | <code>string</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#project SpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#database SpannerBackupSchedule#database}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#instance SpannerBackupSchedule#instance}

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.retentionDuration"></a>

```csharp
public string RetentionDuration { get; set; }
```

- *Type:* string

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#retention_duration SpannerBackupSchedule#retention_duration}

---

##### `FullBackupSpec`<sup>Optional</sup> <a name="FullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.fullBackupSpec"></a>

```csharp
public SpannerBackupScheduleFullBackupSpec FullBackupSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#full_backup_spec SpannerBackupSchedule#full_backup_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#id SpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncrementalBackupSpec`<sup>Optional</sup> <a name="IncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.incrementalBackupSpec"></a>

```csharp
public SpannerBackupScheduleIncrementalBackupSpec IncrementalBackupSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#incremental_backup_spec SpannerBackupSchedule#incremental_backup_spec}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#name SpannerBackupSchedule#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#project SpannerBackupSchedule#project}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.spec"></a>

```csharp
public SpannerBackupScheduleSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#spec SpannerBackupSchedule#spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.timeouts"></a>

```csharp
public SpannerBackupScheduleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#timeouts SpannerBackupSchedule#timeouts}

---

### SpannerBackupScheduleFullBackupSpec <a name="SpannerBackupScheduleFullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleFullBackupSpec {

};
```


### SpannerBackupScheduleIncrementalBackupSpec <a name="SpannerBackupScheduleIncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleIncrementalBackupSpec {

};
```


### SpannerBackupScheduleSpec <a name="SpannerBackupScheduleSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleSpec {
    SpannerBackupScheduleSpecCronSpec CronSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec.property.cronSpec">CronSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a></code> | cron_spec block. |

---

##### `CronSpec`<sup>Optional</sup> <a name="CronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec.property.cronSpec"></a>

```csharp
public SpannerBackupScheduleSpecCronSpec CronSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

cron_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#cron_spec SpannerBackupSchedule#cron_spec}

---

### SpannerBackupScheduleSpecCronSpec <a name="SpannerBackupScheduleSpecCronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleSpecCronSpec {
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec.property.text">Text</a></code> | <code>string</code> | Textual representation of the crontab. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Textual representation of the crontab.

User can customize the
backup frequency and the backup version time using the cron
expression. The version time must be in UTC timzeone.
The backup will contain an externally consistent copy of the
database at the version time. Allowed frequencies are 12 hour, 1 day,
1 week and 1 month. Examples of valid cron specifications:
0 2/12 * * * : every 12 hours at (2, 14) hours past midnight in UTC.
0 2,14 * * * : every 12 hours at (2,14) hours past midnight in UTC.
0 2 * * *    : once a day at 2 past midnight in UTC.
0 2 * * 0    : once a week every Sunday at 2 past midnight in UTC.
0 2 8 * *    : once a month on 8th day at 2 past midnight in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#text SpannerBackupSchedule#text}

---

### SpannerBackupScheduleTimeouts <a name="SpannerBackupScheduleTimeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#create SpannerBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#delete SpannerBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#update SpannerBackupSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#create SpannerBackupSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#delete SpannerBackupSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/spanner_backup_schedule#update SpannerBackupSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerBackupScheduleFullBackupSpecOutputReference <a name="SpannerBackupScheduleFullBackupSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleFullBackupSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue"></a>

```csharp
public SpannerBackupScheduleFullBackupSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

---


### SpannerBackupScheduleIncrementalBackupSpecOutputReference <a name="SpannerBackupScheduleIncrementalBackupSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleIncrementalBackupSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue"></a>

```csharp
public SpannerBackupScheduleIncrementalBackupSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

---


### SpannerBackupScheduleSpecCronSpecOutputReference <a name="SpannerBackupScheduleSpecCronSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleSpecCronSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue"></a>

```csharp
public SpannerBackupScheduleSpecCronSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

---


### SpannerBackupScheduleSpecOutputReference <a name="SpannerBackupScheduleSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.putCronSpec">PutCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resetCronSpec">ResetCronSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCronSpec` <a name="PutCronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.putCronSpec"></a>

```csharp
private void PutCronSpec(SpannerBackupScheduleSpecCronSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.putCronSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

---

##### `ResetCronSpec` <a name="ResetCronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resetCronSpec"></a>

```csharp
private void ResetCronSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpec">CronSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference">SpannerBackupScheduleSpecCronSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpecInput">CronSpecInput</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronSpec`<sup>Required</sup> <a name="CronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpec"></a>

```csharp
public SpannerBackupScheduleSpecCronSpecOutputReference CronSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference">SpannerBackupScheduleSpecCronSpecOutputReference</a>

---

##### `CronSpecInput`<sup>Optional</sup> <a name="CronSpecInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpecInput"></a>

```csharp
public SpannerBackupScheduleSpecCronSpec CronSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.internalValue"></a>

```csharp
public SpannerBackupScheduleSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

---


### SpannerBackupScheduleTimeoutsOutputReference <a name="SpannerBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SpannerBackupScheduleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



