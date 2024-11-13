# `migrationCenterPreferenceSet` Submodule <a name="`migrationCenterPreferenceSet` Submodule" id="@cdktf/provider-google.migrationCenterPreferenceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterPreferenceSet <a name="MigrationCenterPreferenceSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set google_migration_center_preference_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSet(Construct Scope, string Id, MigrationCenterPreferenceSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig">MigrationCenterPreferenceSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig">MigrationCenterPreferenceSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putVirtualMachinePreferences">PutVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetVirtualMachinePreferences">ResetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putTimeouts"></a>

```csharp
private void PutTimeouts(MigrationCenterPreferenceSetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a>

---

##### `PutVirtualMachinePreferences` <a name="PutVirtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putVirtualMachinePreferences"></a>

```csharp
private void PutVirtualMachinePreferences(MigrationCenterPreferenceSetVirtualMachinePreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putVirtualMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualMachinePreferences` <a name="ResetVirtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetVirtualMachinePreferences"></a>

```csharp
private void ResetVirtualMachinePreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MigrationCenterPreferenceSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MigrationCenterPreferenceSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MigrationCenterPreferenceSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MigrationCenterPreferenceSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MigrationCenterPreferenceSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MigrationCenterPreferenceSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MigrationCenterPreferenceSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference">MigrationCenterPreferenceSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.virtualMachinePreferences">VirtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.preferenceSetIdInput">PreferenceSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.virtualMachinePreferencesInput">VirtualMachinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.preferenceSetId">PreferenceSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.timeouts"></a>

```csharp
public MigrationCenterPreferenceSetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference">MigrationCenterPreferenceSetTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VirtualMachinePreferences`<sup>Required</sup> <a name="VirtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.virtualMachinePreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference VirtualMachinePreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PreferenceSetIdInput`<sup>Optional</sup> <a name="PreferenceSetIdInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.preferenceSetIdInput"></a>

```csharp
public string PreferenceSetIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachinePreferencesInput`<sup>Optional</sup> <a name="VirtualMachinePreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.virtualMachinePreferencesInput"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferences VirtualMachinePreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PreferenceSetId`<sup>Required</sup> <a name="PreferenceSetId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.preferenceSetId"></a>

```csharp
public string PreferenceSetId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterPreferenceSetConfig <a name="MigrationCenterPreferenceSetConfig" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string PreferenceSetId,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    MigrationCenterPreferenceSetTimeouts Timeouts = null,
    MigrationCenterPreferenceSetVirtualMachinePreferences VirtualMachinePreferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.location">Location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.preferenceSetId">PreferenceSetId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.description">Description</a></code> | <code>string</code> | A description of the preference set. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#id MigrationCenterPreferenceSet#id}. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#project MigrationCenterPreferenceSet#project}. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.virtualMachinePreferences">VirtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | virtual_machine_preferences block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#location MigrationCenterPreferenceSet#location}

---

##### `PreferenceSetId`<sup>Required</sup> <a name="PreferenceSetId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.preferenceSetId"></a>

```csharp
public string PreferenceSetId { get; set; }
```

- *Type:* string

Required.

User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression '[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#preference_set_id MigrationCenterPreferenceSet#preference_set_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the preference set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#description MigrationCenterPreferenceSet#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#display_name MigrationCenterPreferenceSet#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#id MigrationCenterPreferenceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#project MigrationCenterPreferenceSet#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.timeouts"></a>

```csharp
public MigrationCenterPreferenceSetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#timeouts MigrationCenterPreferenceSet#timeouts}

---

##### `VirtualMachinePreferences`<sup>Optional</sup> <a name="VirtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.virtualMachinePreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferences VirtualMachinePreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a>

virtual_machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#virtual_machine_preferences MigrationCenterPreferenceSet#virtual_machine_preferences}

---

### MigrationCenterPreferenceSetTimeouts <a name="MigrationCenterPreferenceSetTimeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#create MigrationCenterPreferenceSet#create}. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#delete MigrationCenterPreferenceSet#delete}. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#update MigrationCenterPreferenceSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#create MigrationCenterPreferenceSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#delete MigrationCenterPreferenceSet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#update MigrationCenterPreferenceSet#update}.

---

### MigrationCenterPreferenceSetVirtualMachinePreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferences {
    string CommitmentPlan = null,
    MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences ComputeEnginePreferences = null,
    MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences RegionPreferences = null,
    string SizingOptimizationStrategy = null,
    MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences SoleTenancyPreferences = null,
    string TargetProduct = null,
    MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences VmwareEnginePreferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences">ComputeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | compute_engine_preferences block. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences">RegionPreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | region_preferences block. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy">SizingOptimizationStrategy</a></code> | <code>string</code> | Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences">SoleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | sole_tenancy_preferences block. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct">TargetProduct</a></code> | <code>string</code> | Target product for assets using this preference set. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences">VmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | vmware_engine_preferences block. |

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; set; }
```

- *Type:* string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'COMMITMENT_PLAN_NONE', 'COMMITMENT_PLAN_ONE_YEAR', 'COMMITMENT_PLAN_THREE_YEARS'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#commitment_plan MigrationCenterPreferenceSet#commitment_plan}

---

##### `ComputeEnginePreferences`<sup>Optional</sup> <a name="ComputeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences ComputeEnginePreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

compute_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#compute_engine_preferences MigrationCenterPreferenceSet#compute_engine_preferences}

---

##### `RegionPreferences`<sup>Optional</sup> <a name="RegionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences RegionPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

region_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#region_preferences MigrationCenterPreferenceSet#region_preferences}

---

##### `SizingOptimizationStrategy`<sup>Optional</sup> <a name="SizingOptimizationStrategy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy"></a>

```csharp
public string SizingOptimizationStrategy { get; set; }
```

- *Type:* string

Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine.

If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. Possible values: 'SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED', 'SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE', 'SIZING_OPTIMIZATION_STRATEGY_MODERATE', 'SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#sizing_optimization_strategy MigrationCenterPreferenceSet#sizing_optimization_strategy}

---

##### `SoleTenancyPreferences`<sup>Optional</sup> <a name="SoleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences SoleTenancyPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

sole_tenancy_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#sole_tenancy_preferences MigrationCenterPreferenceSet#sole_tenancy_preferences}

---

##### `TargetProduct`<sup>Optional</sup> <a name="TargetProduct" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct"></a>

```csharp
public string TargetProduct { get; set; }
```

- *Type:* string

Target product for assets using this preference set.

Specify either target product or business goal, but not both. Possible values: 'COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED', 'COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#target_product MigrationCenterPreferenceSet#target_product}

---

##### `VmwareEnginePreferences`<sup>Optional</sup> <a name="VmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences VmwareEnginePreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

vmware_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#vmware_engine_preferences MigrationCenterPreferenceSet#vmware_engine_preferences}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences {
    string LicenseType = null,
    MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences MachinePreferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType">LicenseType</a></code> | <code>string</code> | License type to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences">MachinePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | machine_preferences block. |

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

License type to consider when calculating costs for virtual machine insights and recommendations.

If unspecified, costs are calculated based on the default licensing plan. Possible values: 'LICENSE_TYPE_UNSPECIFIED', 'LICENSE_TYPE_DEFAULT', 'LICENSE_TYPE_BRING_YOUR_OWN_LICENSE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#license_type MigrationCenterPreferenceSet#license_type}

---

##### `MachinePreferences`<sup>Optional</sup> <a name="MachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences MachinePreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#machine_preferences MigrationCenterPreferenceSet#machine_preferences}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences {
    object AllowedMachineSeries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries">AllowedMachineSeries</a></code> | <code>object</code> | allowed_machine_series block. |

---

##### `AllowedMachineSeries`<sup>Optional</sup> <a name="AllowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries"></a>

```csharp
public object AllowedMachineSeries { get; set; }
```

- *Type:* object

allowed_machine_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#allowed_machine_series MigrationCenterPreferenceSet#allowed_machine_series}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries {
    string Code = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code">Code</a></code> | <code>string</code> | Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#code MigrationCenterPreferenceSet#code}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences {
    string[] PreferredRegions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions">PreferredRegions</a></code> | <code>string[]</code> | A list of preferred regions, ordered by the most preferred region first. |

---

##### `PreferredRegions`<sup>Optional</sup> <a name="PreferredRegions" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions"></a>

```csharp
public string[] PreferredRegions { get; set; }
```

- *Type:* string[]

A list of preferred regions, ordered by the most preferred region first.

Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#preferred_regions MigrationCenterPreferenceSet#preferred_regions}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences {
    string CommitmentPlan = null,
    double CpuOvercommitRatio = null,
    string HostMaintenancePolicy = null,
    object NodeTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>double</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy">HostMaintenancePolicy</a></code> | <code>string</code> | Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes">NodeTypes</a></code> | <code>object</code> | node_types block. |

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; set; }
```

- *Type:* string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR', 'COMMITMENT_3_YEAR'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#commitment_plan MigrationCenterPreferenceSet#commitment_plan}

---

##### `CpuOvercommitRatio`<sup>Optional</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio"></a>

```csharp
public double CpuOvercommitRatio { get; set; }
```

- *Type:* double

CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#cpu_overcommit_ratio MigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `HostMaintenancePolicy`<sup>Optional</sup> <a name="HostMaintenancePolicy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy"></a>

```csharp
public string HostMaintenancePolicy { get; set; }
```

- *Type:* string

Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#host_maintenance_policy MigrationCenterPreferenceSet#host_maintenance_policy}

---

##### `NodeTypes`<sup>Optional</sup> <a name="NodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes"></a>

```csharp
public object NodeTypes { get; set; }
```

- *Type:* object

node_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#node_types MigrationCenterPreferenceSet#node_types}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes {
    string NodeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName">NodeName</a></code> | <code>string</code> | Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes. |

---

##### `NodeName`<sup>Optional</sup> <a name="NodeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName"></a>

```csharp
public string NodeName { get; set; }
```

- *Type:* string

Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#node_name MigrationCenterPreferenceSet#node_name}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences {
    string CommitmentPlan = null,
    double CpuOvercommitRatio = null,
    double MemoryOvercommitRatio = null,
    double StorageDeduplicationCompressionRatio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>double</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio">MemoryOvercommitRatio</a></code> | <code>double</code> | Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio">StorageDeduplicationCompressionRatio</a></code> | <code>double</code> | The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. |

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; set; }
```

- *Type:* string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_3_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_1_YEAR_UPFRONT_PAYMENT', 'COMMITMENT_3_YEAR_UPFRONT_PAYMENT',

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#commitment_plan MigrationCenterPreferenceSet#commitment_plan}

---

##### `CpuOvercommitRatio`<sup>Optional</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio"></a>

```csharp
public double CpuOvercommitRatio { get; set; }
```

- *Type:* double

CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#cpu_overcommit_ratio MigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `MemoryOvercommitRatio`<sup>Optional</sup> <a name="MemoryOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio"></a>

```csharp
public double MemoryOvercommitRatio { get; set; }
```

- *Type:* double

Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#memory_overcommit_ratio MigrationCenterPreferenceSet#memory_overcommit_ratio}

---

##### `StorageDeduplicationCompressionRatio`<sup>Optional</sup> <a name="StorageDeduplicationCompressionRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio"></a>

```csharp
public double StorageDeduplicationCompressionRatio { get; set; }
```

- *Type:* double

The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression.

Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/migration_center_preference_set#storage_deduplication_compression_ratio MigrationCenterPreferenceSet#storage_deduplication_compression_ratio}

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterPreferenceSetTimeoutsOutputReference <a name="MigrationCenterPreferenceSetTimeoutsOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get"></a>

```csharp
private MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries">PutAllowedMachineSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries">ResetAllowedMachineSeries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedMachineSeries` <a name="PutAllowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries"></a>

```csharp
private void PutAllowedMachineSeries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedMachineSeries` <a name="ResetAllowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries"></a>

```csharp
private void ResetAllowedMachineSeries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries">AllowedMachineSeries</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput">AllowedMachineSeriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedMachineSeries`<sup>Required</sup> <a name="AllowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList AllowedMachineSeries { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a>

---

##### `AllowedMachineSeriesInput`<sup>Optional</sup> <a name="AllowedMachineSeriesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput"></a>

```csharp
public object AllowedMachineSeriesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences">PutMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences">ResetMachinePreferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMachinePreferences` <a name="PutMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences"></a>

```csharp
private void PutMachinePreferences(MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType"></a>

```csharp
private void ResetLicenseType()
```

##### `ResetMachinePreferences` <a name="ResetMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences"></a>

```csharp
private void ResetMachinePreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences">MachinePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput">MachinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MachinePreferences`<sup>Required</sup> <a name="MachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference MachinePreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a>

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `MachinePreferencesInput`<sup>Optional</sup> <a name="MachinePreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences MachinePreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences">PutComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences">PutRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences">PutSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences">PutVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences">ResetComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences">ResetRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy">ResetSizingOptimizationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences">ResetSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct">ResetTargetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences">ResetVmwareEnginePreferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputeEnginePreferences` <a name="PutComputeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences"></a>

```csharp
private void PutComputeEnginePreferences(MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `PutRegionPreferences` <a name="PutRegionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences"></a>

```csharp
private void PutRegionPreferences(MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `PutSoleTenancyPreferences` <a name="PutSoleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences"></a>

```csharp
private void PutSoleTenancyPreferences(MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `PutVmwareEnginePreferences` <a name="PutVmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences"></a>

```csharp
private void PutVmwareEnginePreferences(MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan"></a>

```csharp
private void ResetCommitmentPlan()
```

##### `ResetComputeEnginePreferences` <a name="ResetComputeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences"></a>

```csharp
private void ResetComputeEnginePreferences()
```

##### `ResetRegionPreferences` <a name="ResetRegionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences"></a>

```csharp
private void ResetRegionPreferences()
```

##### `ResetSizingOptimizationStrategy` <a name="ResetSizingOptimizationStrategy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy"></a>

```csharp
private void ResetSizingOptimizationStrategy()
```

##### `ResetSoleTenancyPreferences` <a name="ResetSoleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences"></a>

```csharp
private void ResetSoleTenancyPreferences()
```

##### `ResetTargetProduct` <a name="ResetTargetProduct" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct"></a>

```csharp
private void ResetTargetProduct()
```

##### `ResetVmwareEnginePreferences` <a name="ResetVmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences"></a>

```csharp
private void ResetVmwareEnginePreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences">ComputeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences">RegionPreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences">SoleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences">VmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput">ComputeEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput">RegionPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput">SizingOptimizationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput">SoleTenancyPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput">TargetProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput">VmwareEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy">SizingOptimizationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct">TargetProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeEnginePreferences`<sup>Required</sup> <a name="ComputeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference ComputeEnginePreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a>

---

##### `RegionPreferences`<sup>Required</sup> <a name="RegionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference RegionPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a>

---

##### `SoleTenancyPreferences`<sup>Required</sup> <a name="SoleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference SoleTenancyPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a>

---

##### `VmwareEnginePreferences`<sup>Required</sup> <a name="VmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference VmwareEnginePreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a>

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput"></a>

```csharp
public string CommitmentPlanInput { get; }
```

- *Type:* string

---

##### `ComputeEnginePreferencesInput`<sup>Optional</sup> <a name="ComputeEnginePreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences ComputeEnginePreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `RegionPreferencesInput`<sup>Optional</sup> <a name="RegionPreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences RegionPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `SizingOptimizationStrategyInput`<sup>Optional</sup> <a name="SizingOptimizationStrategyInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput"></a>

```csharp
public string SizingOptimizationStrategyInput { get; }
```

- *Type:* string

---

##### `SoleTenancyPreferencesInput`<sup>Optional</sup> <a name="SoleTenancyPreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences SoleTenancyPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `TargetProductInput`<sup>Optional</sup> <a name="TargetProductInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput"></a>

```csharp
public string TargetProductInput { get; }
```

- *Type:* string

---

##### `VmwareEnginePreferencesInput`<sup>Optional</sup> <a name="VmwareEnginePreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences VmwareEnginePreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; }
```

- *Type:* string

---

##### `SizingOptimizationStrategy`<sup>Required</sup> <a name="SizingOptimizationStrategy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy"></a>

```csharp
public string SizingOptimizationStrategy { get; }
```

- *Type:* string

---

##### `TargetProduct`<sup>Required</sup> <a name="TargetProduct" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct"></a>

```csharp
public string TargetProduct { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions">ResetPreferredRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredRegions` <a name="ResetPreferredRegions" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions"></a>

```csharp
private void ResetPreferredRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput">PreferredRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions">PreferredRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreferredRegionsInput`<sup>Optional</sup> <a name="PreferredRegionsInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput"></a>

```csharp
public string[] PreferredRegionsInput { get; }
```

- *Type:* string[]

---

##### `PreferredRegions`<sup>Required</sup> <a name="PreferredRegions" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions"></a>

```csharp
public string[] PreferredRegions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get"></a>

```csharp
private MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName">ResetNodeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeName` <a name="ResetNodeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName"></a>

```csharp
private void ResetNodeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput">NodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeNameInput`<sup>Optional</sup> <a name="NodeNameInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput"></a>

```csharp
public string NodeNameInput { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes">PutNodeTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio">ResetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy">ResetHostMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes">ResetNodeTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeTypes` <a name="PutNodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes"></a>

```csharp
private void PutNodeTypes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes.parameter.value"></a>

- *Type:* object

---

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan"></a>

```csharp
private void ResetCommitmentPlan()
```

##### `ResetCpuOvercommitRatio` <a name="ResetCpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio"></a>

```csharp
private void ResetCpuOvercommitRatio()
```

##### `ResetHostMaintenancePolicy` <a name="ResetHostMaintenancePolicy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy"></a>

```csharp
private void ResetHostMaintenancePolicy()
```

##### `ResetNodeTypes` <a name="ResetNodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes"></a>

```csharp
private void ResetNodeTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes">NodeTypes</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput">CpuOvercommitRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput">HostMaintenancePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput">NodeTypesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy">HostMaintenancePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeTypes`<sup>Required</sup> <a name="NodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList NodeTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a>

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput"></a>

```csharp
public string CommitmentPlanInput { get; }
```

- *Type:* string

---

##### `CpuOvercommitRatioInput`<sup>Optional</sup> <a name="CpuOvercommitRatioInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```csharp
public double CpuOvercommitRatioInput { get; }
```

- *Type:* double

---

##### `HostMaintenancePolicyInput`<sup>Optional</sup> <a name="HostMaintenancePolicyInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput"></a>

```csharp
public string HostMaintenancePolicyInput { get; }
```

- *Type:* string

---

##### `NodeTypesInput`<sup>Optional</sup> <a name="NodeTypesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput"></a>

```csharp
public object NodeTypesInput { get; }
```

- *Type:* object

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; }
```

- *Type:* string

---

##### `CpuOvercommitRatio`<sup>Required</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio"></a>

```csharp
public double CpuOvercommitRatio { get; }
```

- *Type:* double

---

##### `HostMaintenancePolicy`<sup>Required</sup> <a name="HostMaintenancePolicy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy"></a>

```csharp
public string HostMaintenancePolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio">ResetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio">ResetMemoryOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio">ResetStorageDeduplicationCompressionRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan"></a>

```csharp
private void ResetCommitmentPlan()
```

##### `ResetCpuOvercommitRatio` <a name="ResetCpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio"></a>

```csharp
private void ResetCpuOvercommitRatio()
```

##### `ResetMemoryOvercommitRatio` <a name="ResetMemoryOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio"></a>

```csharp
private void ResetMemoryOvercommitRatio()
```

##### `ResetStorageDeduplicationCompressionRatio` <a name="ResetStorageDeduplicationCompressionRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio"></a>

```csharp
private void ResetStorageDeduplicationCompressionRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput">CpuOvercommitRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput">MemoryOvercommitRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput">StorageDeduplicationCompressionRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio">MemoryOvercommitRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio">StorageDeduplicationCompressionRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput"></a>

```csharp
public string CommitmentPlanInput { get; }
```

- *Type:* string

---

##### `CpuOvercommitRatioInput`<sup>Optional</sup> <a name="CpuOvercommitRatioInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```csharp
public double CpuOvercommitRatioInput { get; }
```

- *Type:* double

---

##### `MemoryOvercommitRatioInput`<sup>Optional</sup> <a name="MemoryOvercommitRatioInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput"></a>

```csharp
public double MemoryOvercommitRatioInput { get; }
```

- *Type:* double

---

##### `StorageDeduplicationCompressionRatioInput`<sup>Optional</sup> <a name="StorageDeduplicationCompressionRatioInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput"></a>

```csharp
public double StorageDeduplicationCompressionRatioInput { get; }
```

- *Type:* double

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; }
```

- *Type:* string

---

##### `CpuOvercommitRatio`<sup>Required</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio"></a>

```csharp
public double CpuOvercommitRatio { get; }
```

- *Type:* double

---

##### `MemoryOvercommitRatio`<sup>Required</sup> <a name="MemoryOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio"></a>

```csharp
public double MemoryOvercommitRatio { get; }
```

- *Type:* double

---

##### `StorageDeduplicationCompressionRatio`<sup>Required</sup> <a name="StorageDeduplicationCompressionRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio"></a>

```csharp
public double StorageDeduplicationCompressionRatio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---



