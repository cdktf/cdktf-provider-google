# `chronicleWatchlist` Submodule <a name="`chronicleWatchlist` Submodule" id="@cdktf/provider-google.chronicleWatchlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleWatchlist <a name="ChronicleWatchlist" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist google_chronicle_watchlist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlist(Construct Scope, string Id, ChronicleWatchlistConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig">ChronicleWatchlistConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig">ChronicleWatchlistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism">PutEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences">PutWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor">ResetMultiplyingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId">ResetWatchlistId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences">ResetWatchlistUserPreferences</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntityPopulationMechanism` <a name="PutEntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism"></a>

```csharp
private void PutEntityPopulationMechanism(ChronicleWatchlistEntityPopulationMechanism Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleWatchlistTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

---

##### `PutWatchlistUserPreferences` <a name="PutWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences"></a>

```csharp
private void PutWatchlistUserPreferences(ChronicleWatchlistWatchlistUserPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMultiplyingFactor` <a name="ResetMultiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor"></a>

```csharp
private void ResetMultiplyingFactor()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWatchlistId` <a name="ResetWatchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId"></a>

```csharp
private void ResetWatchlistId()
```

##### `ResetWatchlistUserPreferences` <a name="ResetWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences"></a>

```csharp
private void ResetWatchlistUserPreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleWatchlist resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleWatchlist.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleWatchlist.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleWatchlist.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleWatchlist.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ChronicleWatchlist resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleWatchlist to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleWatchlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleWatchlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount">EntityCount</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism">EntityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences">WatchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput">EntityPopulationMechanismInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput">MultiplyingFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput">WatchlistIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput">WatchlistUserPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor">MultiplyingFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId">WatchlistId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EntityCount`<sup>Required</sup> <a name="EntityCount" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount"></a>

```csharp
public ChronicleWatchlistEntityCountList EntityCount { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a>

---

##### `EntityPopulationMechanism`<sup>Required</sup> <a name="EntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism"></a>

```csharp
public ChronicleWatchlistEntityPopulationMechanismOutputReference EntityPopulationMechanism { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts"></a>

```csharp
public ChronicleWatchlistTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WatchlistUserPreferences`<sup>Required</sup> <a name="WatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences"></a>

```csharp
public ChronicleWatchlistWatchlistUserPreferencesOutputReference WatchlistUserPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EntityPopulationMechanismInput`<sup>Optional</sup> <a name="EntityPopulationMechanismInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput"></a>

```csharp
public ChronicleWatchlistEntityPopulationMechanism EntityPopulationMechanismInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MultiplyingFactorInput`<sup>Optional</sup> <a name="MultiplyingFactorInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput"></a>

```csharp
public double MultiplyingFactorInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WatchlistIdInput`<sup>Optional</sup> <a name="WatchlistIdInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput"></a>

```csharp
public string WatchlistIdInput { get; }
```

- *Type:* string

---

##### `WatchlistUserPreferencesInput`<sup>Optional</sup> <a name="WatchlistUserPreferencesInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput"></a>

```csharp
public ChronicleWatchlistWatchlistUserPreferences WatchlistUserPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MultiplyingFactor`<sup>Required</sup> <a name="MultiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor"></a>

```csharp
public double MultiplyingFactor { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WatchlistId`<sup>Required</sup> <a name="WatchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId"></a>

```csharp
public string WatchlistId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleWatchlistConfig <a name="ChronicleWatchlistConfig" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    ChronicleWatchlistEntityPopulationMechanism EntityPopulationMechanism,
    string Instance,
    string Location,
    string Description = null,
    string Id = null,
    double MultiplyingFactor = null,
    string Project = null,
    ChronicleWatchlistTimeouts Timeouts = null,
    string WatchlistId = null,
    ChronicleWatchlistWatchlistUserPreferences WatchlistUserPreferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism">EntityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance">Instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description">Description</a></code> | <code>string</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor">MultiplyingFactor</a></code> | <code>double</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId">WatchlistId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences">WatchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#display_name ChronicleWatchlist#display_name}

---

##### `EntityPopulationMechanism`<sup>Required</sup> <a name="EntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism"></a>

```csharp
public ChronicleWatchlistEntityPopulationMechanism EntityPopulationMechanism { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#entity_population_mechanism ChronicleWatchlist#entity_population_mechanism}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#instance ChronicleWatchlist#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#location ChronicleWatchlist#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#description ChronicleWatchlist#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MultiplyingFactor`<sup>Optional</sup> <a name="MultiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor"></a>

```csharp
public double MultiplyingFactor { get; set; }
```

- *Type:* double

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#multiplying_factor ChronicleWatchlist#multiplying_factor}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts"></a>

```csharp
public ChronicleWatchlistTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#timeouts ChronicleWatchlist#timeouts}

---

##### `WatchlistId`<sup>Optional</sup> <a name="WatchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId"></a>

```csharp
public string WatchlistId { get; set; }
```

- *Type:* string

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#watchlist_id ChronicleWatchlist#watchlist_id}

---

##### `WatchlistUserPreferences`<sup>Optional</sup> <a name="WatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences"></a>

```csharp
public ChronicleWatchlistWatchlistUserPreferences WatchlistUserPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#watchlist_user_preferences ChronicleWatchlist#watchlist_user_preferences}

---

### ChronicleWatchlistEntityCount <a name="ChronicleWatchlistEntityCount" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistEntityCount {

};
```


### ChronicleWatchlistEntityPopulationMechanism <a name="ChronicleWatchlistEntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistEntityPopulationMechanism {
    ChronicleWatchlistEntityPopulationMechanismManual Manual = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | manual block. |

---

##### `Manual`<sup>Optional</sup> <a name="Manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual"></a>

```csharp
public ChronicleWatchlistEntityPopulationMechanismManual Manual { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#manual ChronicleWatchlist#manual}

---

### ChronicleWatchlistEntityPopulationMechanismManual <a name="ChronicleWatchlistEntityPopulationMechanismManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistEntityPopulationMechanismManual {

};
```


### ChronicleWatchlistTimeouts <a name="ChronicleWatchlistTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}.

---

### ChronicleWatchlistWatchlistUserPreferences <a name="ChronicleWatchlistWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistWatchlistUserPreferences {
    object Pinned = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned">Pinned</a></code> | <code>object</code> | Optional. Whether the watchlist is pinned on the dashboard. |

---

##### `Pinned`<sup>Optional</sup> <a name="Pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned"></a>

```csharp
public object Pinned { get; set; }
```

- *Type:* object

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_watchlist#pinned ChronicleWatchlist#pinned}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleWatchlistEntityCountList <a name="ChronicleWatchlistEntityCountList" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistEntityCountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get"></a>

```csharp
private ChronicleWatchlistEntityCountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ChronicleWatchlistEntityCountOutputReference <a name="ChronicleWatchlistEntityCountOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistEntityCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset">Asset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user">User</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Asset`<sup>Required</sup> <a name="Asset" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset"></a>

```csharp
public double Asset { get; }
```

- *Type:* double

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user"></a>

```csharp
public double User { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue"></a>

```csharp
public ChronicleWatchlistEntityCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a>

---


### ChronicleWatchlistEntityPopulationMechanismManualOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismManualOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistEntityPopulationMechanismManualOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue"></a>

```csharp
public ChronicleWatchlistEntityPopulationMechanismManual InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---


### ChronicleWatchlistEntityPopulationMechanismOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistEntityPopulationMechanismOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual">PutManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual">ResetManual</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManual` <a name="PutManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual"></a>

```csharp
private void PutManual(ChronicleWatchlistEntityPopulationMechanismManual Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `ResetManual` <a name="ResetManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual"></a>

```csharp
private void ResetManual()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput">ManualInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Manual`<sup>Required</sup> <a name="Manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual"></a>

```csharp
public ChronicleWatchlistEntityPopulationMechanismManualOutputReference Manual { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a>

---

##### `ManualInput`<sup>Optional</sup> <a name="ManualInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput"></a>

```csharp
public ChronicleWatchlistEntityPopulationMechanismManual ManualInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue"></a>

```csharp
public ChronicleWatchlistEntityPopulationMechanism InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---


### ChronicleWatchlistTimeoutsOutputReference <a name="ChronicleWatchlistTimeoutsOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ChronicleWatchlistWatchlistUserPreferencesOutputReference <a name="ChronicleWatchlistWatchlistUserPreferencesOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleWatchlistWatchlistUserPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned">ResetPinned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinned` <a name="ResetPinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned"></a>

```csharp
private void ResetPinned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput">PinnedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned">Pinned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PinnedInput`<sup>Optional</sup> <a name="PinnedInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput"></a>

```csharp
public object PinnedInput { get; }
```

- *Type:* object

---

##### `Pinned`<sup>Required</sup> <a name="Pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned"></a>

```csharp
public object Pinned { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue"></a>

```csharp
public ChronicleWatchlistWatchlistUserPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---



