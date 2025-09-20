# `firestoreDatabase` Submodule <a name="`firestoreDatabase` Submodule" id="@cdktf/provider-google.firestoreDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreDatabase <a name="FirestoreDatabase" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database google_firestore_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreDatabase(Construct Scope, string Id, FirestoreDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig">FirestoreDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig">FirestoreDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putCmekConfig">PutCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetAppEngineIntegrationMode">ResetAppEngineIntegrationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetCmekConfig">ResetCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetConcurrencyMode">ResetConcurrencyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDatabaseEdition">ResetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeleteProtectionState">ResetDeleteProtectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetPointInTimeRecoveryEnablement">ResetPointInTimeRecoveryEnablement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmekConfig` <a name="PutCmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putCmekConfig"></a>

```csharp
private void PutCmekConfig(FirestoreDatabaseCmekConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putCmekConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(FirestoreDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

---

##### `ResetAppEngineIntegrationMode` <a name="ResetAppEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetAppEngineIntegrationMode"></a>

```csharp
private void ResetAppEngineIntegrationMode()
```

##### `ResetCmekConfig` <a name="ResetCmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetCmekConfig"></a>

```csharp
private void ResetCmekConfig()
```

##### `ResetConcurrencyMode` <a name="ResetConcurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetConcurrencyMode"></a>

```csharp
private void ResetConcurrencyMode()
```

##### `ResetDatabaseEdition` <a name="ResetDatabaseEdition" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDatabaseEdition"></a>

```csharp
private void ResetDatabaseEdition()
```

##### `ResetDeleteProtectionState` <a name="ResetDeleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeleteProtectionState"></a>

```csharp
private void ResetDeleteProtectionState()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPointInTimeRecoveryEnablement` <a name="ResetPointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetPointInTimeRecoveryEnablement"></a>

```csharp
private void ResetPointInTimeRecoveryEnablement()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirestoreDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirestoreDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirestoreDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirestoreDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirestoreDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cmekConfig">CmekConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference">FirestoreDatabaseCmekConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.earliestVersionTime">EarliestVersionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference">FirestoreDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.versionRetentionPeriod">VersionRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationModeInput">AppEngineIntegrationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cmekConfigInput">CmekConfigInput</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyModeInput">ConcurrencyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.databaseEditionInput">DatabaseEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionStateInput">DeleteProtectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationIdInput">LocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablementInput">PointInTimeRecoveryEnablementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationMode">AppEngineIntegrationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyMode">ConcurrencyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionState">DeleteProtectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationId">LocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablement">PointInTimeRecoveryEnablement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CmekConfig`<sup>Required</sup> <a name="CmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cmekConfig"></a>

```csharp
public FirestoreDatabaseCmekConfigOutputReference CmekConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference">FirestoreDatabaseCmekConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EarliestVersionTime`<sup>Required</sup> <a name="EarliestVersionTime" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.earliestVersionTime"></a>

```csharp
public string EarliestVersionTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeouts"></a>

```csharp
public FirestoreDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference">FirestoreDatabaseTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VersionRetentionPeriod`<sup>Required</sup> <a name="VersionRetentionPeriod" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.versionRetentionPeriod"></a>

```csharp
public string VersionRetentionPeriod { get; }
```

- *Type:* string

---

##### `AppEngineIntegrationModeInput`<sup>Optional</sup> <a name="AppEngineIntegrationModeInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationModeInput"></a>

```csharp
public string AppEngineIntegrationModeInput { get; }
```

- *Type:* string

---

##### `CmekConfigInput`<sup>Optional</sup> <a name="CmekConfigInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cmekConfigInput"></a>

```csharp
public FirestoreDatabaseCmekConfig CmekConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a>

---

##### `ConcurrencyModeInput`<sup>Optional</sup> <a name="ConcurrencyModeInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyModeInput"></a>

```csharp
public string ConcurrencyModeInput { get; }
```

- *Type:* string

---

##### `DatabaseEditionInput`<sup>Optional</sup> <a name="DatabaseEditionInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.databaseEditionInput"></a>

```csharp
public string DatabaseEditionInput { get; }
```

- *Type:* string

---

##### `DeleteProtectionStateInput`<sup>Optional</sup> <a name="DeleteProtectionStateInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionStateInput"></a>

```csharp
public string DeleteProtectionStateInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationIdInput`<sup>Optional</sup> <a name="LocationIdInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationIdInput"></a>

```csharp
public string LocationIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryEnablementInput`<sup>Optional</sup> <a name="PointInTimeRecoveryEnablementInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablementInput"></a>

```csharp
public string PointInTimeRecoveryEnablementInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AppEngineIntegrationMode`<sup>Required</sup> <a name="AppEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationMode"></a>

```csharp
public string AppEngineIntegrationMode { get; }
```

- *Type:* string

---

##### `ConcurrencyMode`<sup>Required</sup> <a name="ConcurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyMode"></a>

```csharp
public string ConcurrencyMode { get; }
```

- *Type:* string

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DeleteProtectionState`<sup>Required</sup> <a name="DeleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionState"></a>

```csharp
public string DeleteProtectionState { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationId"></a>

```csharp
public string LocationId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryEnablement`<sup>Required</sup> <a name="PointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablement"></a>

```csharp
public string PointInTimeRecoveryEnablement { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreDatabaseCmekConfig <a name="FirestoreDatabaseCmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreDatabaseCmekConfig {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The resource ID of a Cloud KMS key. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The resource ID of a Cloud KMS key.

If set, the database created will
be a Customer-managed Encryption Key (CMEK) database encrypted with
this key. This feature is allowlist only in initial launch.

Only keys in the same location as this database are allowed to be used
for encryption. For Firestore's nam5 multi-region, this corresponds to Cloud KMS
multi-region us. For Firestore's eur3 multi-region, this corresponds to
Cloud KMS multi-region europe. See https://cloud.google.com/kms/docs/locations.

This value should be the KMS key resource ID in the format of
'projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
How to retrieve this resource ID is listed at
https://cloud.google.com/kms/docs/getting-resource-ids#getting_the_id_for_a_key_and_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#kms_key_name FirestoreDatabase#kms_key_name}

---

### FirestoreDatabaseConfig <a name="FirestoreDatabaseConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LocationId,
    string Name,
    string Type,
    string AppEngineIntegrationMode = null,
    FirestoreDatabaseCmekConfig CmekConfig = null,
    string ConcurrencyMode = null,
    string DatabaseEdition = null,
    string DeleteProtectionState = null,
    string DeletionPolicy = null,
    string Id = null,
    string PointInTimeRecoveryEnablement = null,
    string Project = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    FirestoreDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.locationId">LocationId</a></code> | <code>string</code> | The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.name">Name</a></code> | <code>string</code> | The ID to use for the database, which will become the final component of the database's resource name. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.type">Type</a></code> | <code>string</code> | The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.appEngineIntegrationMode">AppEngineIntegrationMode</a></code> | <code>string</code> | The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.cmekConfig">CmekConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a></code> | cmek_config block. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.concurrencyMode">ConcurrencyMode</a></code> | <code>string</code> | The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | The database edition. Possible values: ["STANDARD", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deleteProtectionState">DeleteProtectionState</a></code> | <code>string</code> | State of delete protection for the database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Deletion behavior for this database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#id FirestoreDatabase#id}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement">PointInTimeRecoveryEnablement</a></code> | <code>string</code> | Whether to enable the PITR feature on this database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#project FirestoreDatabase#project}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Input only. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.locationId"></a>

```csharp
public string LocationId { get; set; }
```

- *Type:* string

The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#location_id FirestoreDatabase#location_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID to use for the database, which will become the final component of the database's resource name.

This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#name FirestoreDatabase#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#type FirestoreDatabase#type}

---

##### `AppEngineIntegrationMode`<sup>Optional</sup> <a name="AppEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.appEngineIntegrationMode"></a>

```csharp
public string AppEngineIntegrationMode { get; set; }
```

- *Type:* string

The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#app_engine_integration_mode FirestoreDatabase#app_engine_integration_mode}

---

##### `CmekConfig`<sup>Optional</sup> <a name="CmekConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.cmekConfig"></a>

```csharp
public FirestoreDatabaseCmekConfig CmekConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a>

cmek_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#cmek_config FirestoreDatabase#cmek_config}

---

##### `ConcurrencyMode`<sup>Optional</sup> <a name="ConcurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.concurrencyMode"></a>

```csharp
public string ConcurrencyMode { get; set; }
```

- *Type:* string

The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#concurrency_mode FirestoreDatabase#concurrency_mode}

---

##### `DatabaseEdition`<sup>Optional</sup> <a name="DatabaseEdition" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; set; }
```

- *Type:* string

The database edition. Possible values: ["STANDARD", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#database_edition FirestoreDatabase#database_edition}

---

##### `DeleteProtectionState`<sup>Optional</sup> <a name="DeleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deleteProtectionState"></a>

```csharp
public string DeleteProtectionState { get; set; }
```

- *Type:* string

State of delete protection for the database.

When delete protection is enabled, this database cannot be deleted.
The default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
**Note:** Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'. Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#delete_protection_state FirestoreDatabase#delete_protection_state}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Deletion behavior for this database.

If the deletion policy is 'ABANDON', the database will be removed from Terraform state but not deleted from Google Cloud upon destruction.
If the deletion policy is 'DELETE', the database will both be removed from Terraform state and deleted from Google Cloud upon destruction.
The default value is 'ABANDON'.
See also 'delete_protection'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#deletion_policy FirestoreDatabase#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#id FirestoreDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PointInTimeRecoveryEnablement`<sup>Optional</sup> <a name="PointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement"></a>

```csharp
public string PointInTimeRecoveryEnablement { get; set; }
```

- *Type:* string

Whether to enable the PITR feature on this database.

If 'POINT_IN_TIME_RECOVERY_ENABLED' is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If 'POINT_IN_TIME_RECOVERY_DISABLED' is selected, reads are supported on any version of the data from within the past 1 hour. Default value: "POINT_IN_TIME_RECOVERY_DISABLED" Possible values: ["POINT_IN_TIME_RECOVERY_ENABLED", "POINT_IN_TIME_RECOVERY_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#point_in_time_recovery_enablement FirestoreDatabase#point_in_time_recovery_enablement}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#project FirestoreDatabase#project}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Input only.

A map of resource manager tags. Resource manager tag keys
and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
The field is ignored when empty. The field is immutable and causes
resource replacement when mutated. To apply tags to an existing resource, see
the 'google_tags_tag_value' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#tags FirestoreDatabase#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.timeouts"></a>

```csharp
public FirestoreDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#timeouts FirestoreDatabase#timeouts}

---

### FirestoreDatabaseTimeouts <a name="FirestoreDatabaseTimeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#create FirestoreDatabase#create}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#delete FirestoreDatabase#delete}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#update FirestoreDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#create FirestoreDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#delete FirestoreDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firestore_database#update FirestoreDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreDatabaseCmekConfigOutputReference <a name="FirestoreDatabaseCmekConfigOutputReference" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreDatabaseCmekConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.activeKeyVersion"></a>

```csharp
public string[] ActiveKeyVersion { get; }
```

- *Type:* string[]

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfigOutputReference.property.internalValue"></a>

```csharp
public FirestoreDatabaseCmekConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseCmekConfig">FirestoreDatabaseCmekConfig</a>

---


### FirestoreDatabaseTimeoutsOutputReference <a name="FirestoreDatabaseTimeoutsOutputReference" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



