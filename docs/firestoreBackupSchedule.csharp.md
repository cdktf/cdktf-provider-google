# `firestoreBackupSchedule` Submodule <a name="`firestoreBackupSchedule` Submodule" id="@cdktf/provider-google.firestoreBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreBackupSchedule <a name="FirestoreBackupSchedule" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule google_firestore_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreBackupSchedule(Construct Scope, string Id, FirestoreBackupScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig">FirestoreBackupScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig">FirestoreBackupScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putDailyRecurrence">PutDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putWeeklyRecurrence">PutWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDailyRecurrence">ResetDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetWeeklyRecurrence">ResetWeeklyRecurrence</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDailyRecurrence` <a name="PutDailyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putDailyRecurrence"></a>

```csharp
private void PutDailyRecurrence(FirestoreBackupScheduleDailyRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putDailyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts"></a>

```csharp
private void PutTimeouts(FirestoreBackupScheduleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>

---

##### `PutWeeklyRecurrence` <a name="PutWeeklyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putWeeklyRecurrence"></a>

```csharp
private void PutWeeklyRecurrence(FirestoreBackupScheduleWeeklyRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putWeeklyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

---

##### `ResetDailyRecurrence` <a name="ResetDailyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDailyRecurrence"></a>

```csharp
private void ResetDailyRecurrence()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeeklyRecurrence` <a name="ResetWeeklyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetWeeklyRecurrence"></a>

```csharp
private void ResetWeeklyRecurrence()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirestoreBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreBackupSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreBackupSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreBackupSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreBackupSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirestoreBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirestoreBackupSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirestoreBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirestoreBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrence">DailyRecurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference">FirestoreBackupScheduleDailyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference">FirestoreBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrence">WeeklyRecurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference">FirestoreBackupScheduleWeeklyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrenceInput">DailyRecurrenceInput</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retentionInput">RetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrenceInput">WeeklyRecurrenceInput</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retention">Retention</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DailyRecurrence`<sup>Required</sup> <a name="DailyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrence"></a>

```csharp
public FirestoreBackupScheduleDailyRecurrenceOutputReference DailyRecurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference">FirestoreBackupScheduleDailyRecurrenceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeouts"></a>

```csharp
public FirestoreBackupScheduleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference">FirestoreBackupScheduleTimeoutsOutputReference</a>

---

##### `WeeklyRecurrence`<sup>Required</sup> <a name="WeeklyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrence"></a>

```csharp
public FirestoreBackupScheduleWeeklyRecurrenceOutputReference WeeklyRecurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference">FirestoreBackupScheduleWeeklyRecurrenceOutputReference</a>

---

##### `DailyRecurrenceInput`<sup>Optional</sup> <a name="DailyRecurrenceInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrenceInput"></a>

```csharp
public FirestoreBackupScheduleDailyRecurrence DailyRecurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retentionInput"></a>

```csharp
public string RetentionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WeeklyRecurrenceInput`<sup>Optional</sup> <a name="WeeklyRecurrenceInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrenceInput"></a>

```csharp
public FirestoreBackupScheduleWeeklyRecurrence WeeklyRecurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retention"></a>

```csharp
public string Retention { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreBackupScheduleConfig <a name="FirestoreBackupScheduleConfig" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreBackupScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Retention,
    FirestoreBackupScheduleDailyRecurrence DailyRecurrence = null,
    string Database = null,
    string Id = null,
    string Project = null,
    FirestoreBackupScheduleTimeouts Timeouts = null,
    FirestoreBackupScheduleWeeklyRecurrence WeeklyRecurrence = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.retention">Retention</a></code> | <code>string</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dailyRecurrence">DailyRecurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.database">Database</a></code> | <code>string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#id FirestoreBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#project FirestoreBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.weeklyRecurrence">WeeklyRecurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.retention"></a>

```csharp
public string Retention { get; set; }
```

- *Type:* string

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

You can set this to a value up to 14 weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#retention FirestoreBackupSchedule#retention}

---

##### `DailyRecurrence`<sup>Optional</sup> <a name="DailyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dailyRecurrence"></a>

```csharp
public FirestoreBackupScheduleDailyRecurrence DailyRecurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#daily_recurrence FirestoreBackupSchedule#daily_recurrence}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#database FirestoreBackupSchedule#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#id FirestoreBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#project FirestoreBackupSchedule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.timeouts"></a>

```csharp
public FirestoreBackupScheduleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#timeouts FirestoreBackupSchedule#timeouts}

---

##### `WeeklyRecurrence`<sup>Optional</sup> <a name="WeeklyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.weeklyRecurrence"></a>

```csharp
public FirestoreBackupScheduleWeeklyRecurrence WeeklyRecurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#weekly_recurrence FirestoreBackupSchedule#weekly_recurrence}

---

### FirestoreBackupScheduleDailyRecurrence <a name="FirestoreBackupScheduleDailyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreBackupScheduleDailyRecurrence {

};
```


### FirestoreBackupScheduleTimeouts <a name="FirestoreBackupScheduleTimeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreBackupScheduleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#create FirestoreBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#delete FirestoreBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#update FirestoreBackupSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#create FirestoreBackupSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#delete FirestoreBackupSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#update FirestoreBackupSchedule#update}.

---

### FirestoreBackupScheduleWeeklyRecurrence <a name="FirestoreBackupScheduleWeeklyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreBackupScheduleWeeklyRecurrence {
    string Day = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence.property.day">Day</a></code> | <code>string</code> | The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firestore_backup_schedule#day FirestoreBackupSchedule#day}

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreBackupScheduleDailyRecurrenceOutputReference <a name="FirestoreBackupScheduleDailyRecurrenceOutputReference" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreBackupScheduleDailyRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.internalValue"></a>

```csharp
public FirestoreBackupScheduleDailyRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

---


### FirestoreBackupScheduleTimeoutsOutputReference <a name="FirestoreBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreBackupScheduleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirestoreBackupScheduleWeeklyRecurrenceOutputReference <a name="FirestoreBackupScheduleWeeklyRecurrenceOutputReference" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreBackupScheduleWeeklyRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resetDay">ResetDay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.internalValue"></a>

```csharp
public FirestoreBackupScheduleWeeklyRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

---



