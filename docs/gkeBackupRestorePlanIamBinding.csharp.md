# `gkeBackupRestorePlanIamBinding` Submodule <a name="`gkeBackupRestorePlanIamBinding` Submodule" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupRestorePlanIamBinding <a name="GkeBackupRestorePlanIamBinding" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding google_gke_backup_restore_plan_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeBackupRestorePlanIamBinding(Construct Scope, string Id, GkeBackupRestorePlanIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig">GkeBackupRestorePlanIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig">GkeBackupRestorePlanIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.putCondition"></a>

```csharp
private void PutCondition(GkeBackupRestorePlanIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeBackupRestorePlanIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeBackupRestorePlanIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeBackupRestorePlanIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeBackupRestorePlanIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeBackupRestorePlanIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GkeBackupRestorePlanIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeBackupRestorePlanIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeBackupRestorePlanIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GkeBackupRestorePlanIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference">GkeBackupRestorePlanIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.condition"></a>

```csharp
public GkeBackupRestorePlanIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference">GkeBackupRestorePlanIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.conditionInput"></a>

```csharp
public GkeBackupRestorePlanIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupRestorePlanIamBindingCondition <a name="GkeBackupRestorePlanIamBindingCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeBackupRestorePlanIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#expression GkeBackupRestorePlanIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#title GkeBackupRestorePlanIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#description GkeBackupRestorePlanIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#expression GkeBackupRestorePlanIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#title GkeBackupRestorePlanIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#description GkeBackupRestorePlanIamBinding#description}.

---

### GkeBackupRestorePlanIamBindingConfig <a name="GkeBackupRestorePlanIamBindingConfig" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeBackupRestorePlanIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string Name,
    string Role,
    GkeBackupRestorePlanIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#members GkeBackupRestorePlanIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#name GkeBackupRestorePlanIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#role GkeBackupRestorePlanIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#id GkeBackupRestorePlanIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#location GkeBackupRestorePlanIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#project GkeBackupRestorePlanIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#members GkeBackupRestorePlanIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#name GkeBackupRestorePlanIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#role GkeBackupRestorePlanIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.condition"></a>

```csharp
public GkeBackupRestorePlanIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#condition GkeBackupRestorePlanIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#id GkeBackupRestorePlanIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#location GkeBackupRestorePlanIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_restore_plan_iam_binding#project GkeBackupRestorePlanIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupRestorePlanIamBindingConditionOutputReference <a name="GkeBackupRestorePlanIamBindingConditionOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeBackupRestorePlanIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GkeBackupRestorePlanIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a>

---



