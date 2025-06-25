# `dataplexEntry` Submodule <a name="`dataplexEntry` Submodule" id="@cdktf/provider-google.dataplexEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexEntry <a name="DataplexEntry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry google_dataplex_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntry(Construct Scope, string Id, DataplexEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig">DataplexEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig">DataplexEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.putAspects">PutAspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource">PutEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetAspects">ResetAspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryGroupId">ResetEntryGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryId">ResetEntryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntrySource">ResetEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetParentEntry">ResetParentEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAspects` <a name="PutAspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putAspects"></a>

```csharp
private void PutAspects(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putAspects.parameter.value"></a>

- *Type:* object

---

##### `PutEntrySource` <a name="PutEntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource"></a>

```csharp
private void PutEntrySource(DataplexEntryEntrySource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts"></a>

```csharp
private void PutTimeouts(DataplexEntryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a>

---

##### `ResetAspects` <a name="ResetAspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetAspects"></a>

```csharp
private void ResetAspects()
```

##### `ResetEntryGroupId` <a name="ResetEntryGroupId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryGroupId"></a>

```csharp
private void ResetEntryGroupId()
```

##### `ResetEntryId` <a name="ResetEntryId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryId"></a>

```csharp
private void ResetEntryId()
```

##### `ResetEntrySource` <a name="ResetEntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntrySource"></a>

```csharp
private void ResetEntrySource()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetFullyQualifiedName"></a>

```csharp
private void ResetFullyQualifiedName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetParentEntry` <a name="ResetParentEntry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetParentEntry"></a>

```csharp
private void ResetParentEntry()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataplexEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataplexEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataplexEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataplexEntry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataplexEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataplexEntry resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataplexEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspects">Aspects</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList">DataplexEntryAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySource">EntrySource</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference">DataplexEntryEntrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference">DataplexEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspectsInput">AspectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupIdInput">EntryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryIdInput">EntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySourceInput">EntrySourceInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryTypeInput">EntryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntryInput">ParentEntryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupId">EntryGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryId">EntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryType">EntryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntry">ParentEntry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Aspects`<sup>Required</sup> <a name="Aspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspects"></a>

```csharp
public DataplexEntryAspectsList Aspects { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList">DataplexEntryAspectsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EntrySource`<sup>Required</sup> <a name="EntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySource"></a>

```csharp
public DataplexEntryEntrySourceOutputReference EntrySource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference">DataplexEntryEntrySourceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeouts"></a>

```csharp
public DataplexEntryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference">DataplexEntryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AspectsInput`<sup>Optional</sup> <a name="AspectsInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspectsInput"></a>

```csharp
public object AspectsInput { get; }
```

- *Type:* object

---

##### `EntryGroupIdInput`<sup>Optional</sup> <a name="EntryGroupIdInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupIdInput"></a>

```csharp
public string EntryGroupIdInput { get; }
```

- *Type:* string

---

##### `EntryIdInput`<sup>Optional</sup> <a name="EntryIdInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryIdInput"></a>

```csharp
public string EntryIdInput { get; }
```

- *Type:* string

---

##### `EntrySourceInput`<sup>Optional</sup> <a name="EntrySourceInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySourceInput"></a>

```csharp
public DataplexEntryEntrySource EntrySourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

---

##### `EntryTypeInput`<sup>Optional</sup> <a name="EntryTypeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryTypeInput"></a>

```csharp
public string EntryTypeInput { get; }
```

- *Type:* string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedNameInput"></a>

```csharp
public string FullyQualifiedNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentEntryInput`<sup>Optional</sup> <a name="ParentEntryInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntryInput"></a>

```csharp
public string ParentEntryInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EntryGroupId`<sup>Required</sup> <a name="EntryGroupId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupId"></a>

```csharp
public string EntryGroupId { get; }
```

- *Type:* string

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryId"></a>

```csharp
public string EntryId { get; }
```

- *Type:* string

---

##### `EntryType`<sup>Required</sup> <a name="EntryType" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryType"></a>

```csharp
public string EntryType { get; }
```

- *Type:* string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ParentEntry`<sup>Required</sup> <a name="ParentEntry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntry"></a>

```csharp
public string ParentEntry { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexEntryAspects <a name="DataplexEntryAspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryAspects {
    DataplexEntryAspectsAspect Aspect,
    string AspectKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspect">Aspect</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspectKey">AspectKey</a></code> | <code>string</code> | Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:. |

---

##### `Aspect`<sup>Required</sup> <a name="Aspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspect"></a>

```csharp
public DataplexEntryAspectsAspect Aspect { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#aspect DataplexEntry#aspect}

---

##### `AspectKey`<sup>Required</sup> <a name="AspectKey" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspectKey"></a>

```csharp
public string AspectKey { get; set; }
```

- *Type:* string

Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:.

If the aspect is attached directly to the entry: {project_number}.{locationId}.{aspectTypeId}
If the aspect is attached to an entry's path: {project_number}.{locationId}.{aspectTypeId}@{path}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#aspect_key DataplexEntry#aspect_key}

---

### DataplexEntryAspectsAspect <a name="DataplexEntryAspectsAspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryAspectsAspect {
    string Data
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect.property.data">Data</a></code> | <code>string</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#data DataplexEntry#data}

---

### DataplexEntryConfig <a name="DataplexEntryConfig" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EntryType,
    object Aspects = null,
    string EntryGroupId = null,
    string EntryId = null,
    DataplexEntryEntrySource EntrySource = null,
    string FullyQualifiedName = null,
    string Id = null,
    string Location = null,
    string ParentEntry = null,
    string Project = null,
    DataplexEntryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryType">EntryType</a></code> | <code>string</code> | The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.aspects">Aspects</a></code> | <code>object</code> | aspects block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryGroupId">EntryGroupId</a></code> | <code>string</code> | The entry group id of the entry group the entry will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryId">EntryId</a></code> | <code>string</code> | The entry id of the entry. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entrySource">EntrySource</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | entry_source block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | A name for the entry that can be referenced by an external system. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#id DataplexEntry#id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.location">Location</a></code> | <code>string</code> | The location where entry will be created. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.parentEntry">ParentEntry</a></code> | <code>string</code> | The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#project DataplexEntry#project}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EntryType`<sup>Required</sup> <a name="EntryType" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryType"></a>

```csharp
public string EntryType { get; set; }
```

- *Type:* string

The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#entry_type DataplexEntry#entry_type}

---

##### `Aspects`<sup>Optional</sup> <a name="Aspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.aspects"></a>

```csharp
public object Aspects { get; set; }
```

- *Type:* object

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#aspects DataplexEntry#aspects}

---

##### `EntryGroupId`<sup>Optional</sup> <a name="EntryGroupId" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryGroupId"></a>

```csharp
public string EntryGroupId { get; set; }
```

- *Type:* string

The entry group id of the entry group the entry will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#entry_group_id DataplexEntry#entry_group_id}

---

##### `EntryId`<sup>Optional</sup> <a name="EntryId" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryId"></a>

```csharp
public string EntryId { get; set; }
```

- *Type:* string

The entry id of the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#entry_id DataplexEntry#entry_id}

---

##### `EntrySource`<sup>Optional</sup> <a name="EntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entrySource"></a>

```csharp
public DataplexEntryEntrySource EntrySource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

entry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#entry_source DataplexEntry#entry_source}

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; set; }
```

- *Type:* string

A name for the entry that can be referenced by an external system.

For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
The maximum size of the field is 4000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#fully_qualified_name DataplexEntry#fully_qualified_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#id DataplexEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where entry will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#location DataplexEntry#location}

---

##### `ParentEntry`<sup>Optional</sup> <a name="ParentEntry" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.parentEntry"></a>

```csharp
public string ParentEntry { get; set; }
```

- *Type:* string

The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#parent_entry DataplexEntry#parent_entry}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#project DataplexEntry#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.timeouts"></a>

```csharp
public DataplexEntryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#timeouts DataplexEntry#timeouts}

---

### DataplexEntryEntrySource <a name="DataplexEntryEntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryEntrySource {
    object Ancestors = null,
    string CreateTime = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Platform = null,
    string Resource = null,
    string SystemAttribute = null,
    string UpdateTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.ancestors">Ancestors</a></code> | <code>object</code> | ancestors block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.createTime">CreateTime</a></code> | <code>string</code> | The time when the resource was created in the source system. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.description">Description</a></code> | <code>string</code> | A description of the data resource. Maximum length is 2,000 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.displayName">DisplayName</a></code> | <code>string</code> | A user-friendly display name. Maximum length is 500 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.platform">Platform</a></code> | <code>string</code> | The platform containing the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.resource">Resource</a></code> | <code>string</code> | The name of the resource in the source system. Maximum length is 4,000 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.systemAttribute">SystemAttribute</a></code> | <code>string</code> | The name of the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.updateTime">UpdateTime</a></code> | <code>string</code> | The time when the resource was last updated in the source system. |

---

##### `Ancestors`<sup>Optional</sup> <a name="Ancestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.ancestors"></a>

```csharp
public object Ancestors { get; set; }
```

- *Type:* object

ancestors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#ancestors DataplexEntry#ancestors}

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.createTime"></a>

```csharp
public string CreateTime { get; set; }
```

- *Type:* string

The time when the resource was created in the source system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#create_time DataplexEntry#create_time}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the data resource. Maximum length is 2,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#description DataplexEntry#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A user-friendly display name. Maximum length is 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#display_name DataplexEntry#display_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

The maximum size of keys and values is 128 characters each.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#labels DataplexEntry#labels}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

The platform containing the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#platform DataplexEntry#platform}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

The name of the resource in the source system. Maximum length is 4,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#resource DataplexEntry#resource}

---

##### `SystemAttribute`<sup>Optional</sup> <a name="SystemAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.systemAttribute"></a>

```csharp
public string SystemAttribute { get; set; }
```

- *Type:* string

The name of the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#system DataplexEntry#system}

---

##### `UpdateTime`<sup>Optional</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.updateTime"></a>

```csharp
public string UpdateTime { get; set; }
```

- *Type:* string

The time when the resource was last updated in the source system.

If the entry exists in the system and its EntrySource has updateTime populated,
further updates to the EntrySource of the entry must provide incremental updates to its updateTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#update_time DataplexEntry#update_time}

---

### DataplexEntryEntrySourceAncestors <a name="DataplexEntryEntrySourceAncestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryEntrySourceAncestors {
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.name">Name</a></code> | <code>string</code> | The name of the ancestor resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.type">Type</a></code> | <code>string</code> | The type of the ancestor resource. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#name DataplexEntry#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#type DataplexEntry#type}

---

### DataplexEntryTimeouts <a name="DataplexEntryTimeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#create DataplexEntry#create}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#delete DataplexEntry#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#update DataplexEntry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#create DataplexEntry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#delete DataplexEntry#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataplex_entry#update DataplexEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexEntryAspectsAspectOutputReference <a name="DataplexEntryAspectsAspectOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryAspectsAspectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.aspectType">AspectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AspectType`<sup>Required</sup> <a name="AspectType" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.aspectType"></a>

```csharp
public string AspectType { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.internalValue"></a>

```csharp
public DataplexEntryAspectsAspect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

---


### DataplexEntryAspectsList <a name="DataplexEntryAspectsList" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryAspectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.get"></a>

```csharp
private DataplexEntryAspectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataplexEntryAspectsOutputReference <a name="DataplexEntryAspectsOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryAspectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.putAspect">PutAspect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAspect` <a name="PutAspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.putAspect"></a>

```csharp
private void PutAspect(DataplexEntryAspectsAspect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.putAspect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspect">Aspect</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference">DataplexEntryAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectInput">AspectInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKeyInput">AspectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKey">AspectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aspect`<sup>Required</sup> <a name="Aspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspect"></a>

```csharp
public DataplexEntryAspectsAspectOutputReference Aspect { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference">DataplexEntryAspectsAspectOutputReference</a>

---

##### `AspectInput`<sup>Optional</sup> <a name="AspectInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectInput"></a>

```csharp
public DataplexEntryAspectsAspect AspectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

---

##### `AspectKeyInput`<sup>Optional</sup> <a name="AspectKeyInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKeyInput"></a>

```csharp
public string AspectKeyInput { get; }
```

- *Type:* string

---

##### `AspectKey`<sup>Required</sup> <a name="AspectKey" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKey"></a>

```csharp
public string AspectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataplexEntryEntrySourceAncestorsList <a name="DataplexEntryEntrySourceAncestorsList" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryEntrySourceAncestorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.get"></a>

```csharp
private DataplexEntryEntrySourceAncestorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataplexEntryEntrySourceAncestorsOutputReference <a name="DataplexEntryEntrySourceAncestorsOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryEntrySourceAncestorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataplexEntryEntrySourceOutputReference <a name="DataplexEntryEntrySourceOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryEntrySourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.putAncestors">PutAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetAncestors">ResetAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetSystemAttribute">ResetSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetUpdateTime">ResetUpdateTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAncestors` <a name="PutAncestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.putAncestors"></a>

```csharp
private void PutAncestors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.putAncestors.parameter.value"></a>

- *Type:* object

---

##### `ResetAncestors` <a name="ResetAncestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetAncestors"></a>

```csharp
private void ResetAncestors()
```

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetCreateTime"></a>

```csharp
private void ResetCreateTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```

##### `ResetSystemAttribute` <a name="ResetSystemAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetSystemAttribute"></a>

```csharp
private void ResetSystemAttribute()
```

##### `ResetUpdateTime` <a name="ResetUpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetUpdateTime"></a>

```csharp
private void ResetUpdateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestors">Ancestors</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList">DataplexEntryEntrySourceAncestorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestorsInput">AncestorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTimeInput">CreateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttributeInput">SystemAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTimeInput">UpdateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ancestors`<sup>Required</sup> <a name="Ancestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestors"></a>

```csharp
public DataplexEntryEntrySourceAncestorsList Ancestors { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList">DataplexEntryEntrySourceAncestorsList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `AncestorsInput`<sup>Optional</sup> <a name="AncestorsInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestorsInput"></a>

```csharp
public object AncestorsInput { get; }
```

- *Type:* object

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTimeInput"></a>

```csharp
public string CreateTimeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `SystemAttributeInput`<sup>Optional</sup> <a name="SystemAttributeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttributeInput"></a>

```csharp
public string SystemAttributeInput { get; }
```

- *Type:* string

---

##### `UpdateTimeInput`<sup>Optional</sup> <a name="UpdateTimeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTimeInput"></a>

```csharp
public string UpdateTimeInput { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttribute"></a>

```csharp
public string SystemAttribute { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.internalValue"></a>

```csharp
public DataplexEntryEntrySource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

---


### DataplexEntryTimeoutsOutputReference <a name="DataplexEntryTimeoutsOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexEntryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



