# `bigqueryReservation` Submodule <a name="`bigqueryReservation` Submodule" id="@cdktf/provider-google.bigqueryReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryReservation <a name="BigqueryReservation" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation google_bigquery_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservation(Construct Scope, string Id, BigqueryReservationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig">BigqueryReservationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig">BigqueryReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetConcurrency">ResetConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetIgnoreIdleSlots">ResetIgnoreIdleSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetSecondaryLocation">ResetSecondaryLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putAutoscale"></a>

```csharp
private void PutAutoscale(BigqueryReservationAutoscale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putTimeouts"></a>

```csharp
private void PutTimeouts(BigqueryReservationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts">BigqueryReservationTimeouts</a>

---

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetAutoscale"></a>

```csharp
private void ResetAutoscale()
```

##### `ResetConcurrency` <a name="ResetConcurrency" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetConcurrency"></a>

```csharp
private void ResetConcurrency()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetEdition"></a>

```csharp
private void ResetEdition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreIdleSlots` <a name="ResetIgnoreIdleSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetIgnoreIdleSlots"></a>

```csharp
private void ResetIgnoreIdleSlots()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSecondaryLocation` <a name="ResetSecondaryLocation" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetSecondaryLocation"></a>

```csharp
private void ResetSecondaryLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryReservation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryReservation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryReservation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryReservation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryReservation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BigqueryReservation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryReservation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference">BigqueryReservationAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.originalPrimaryLocation">OriginalPrimaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.primaryLocation">PrimaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.replicationStatus">ReplicationStatus</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList">BigqueryReservationReplicationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference">BigqueryReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.concurrencyInput">ConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.editionInput">EditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.ignoreIdleSlotsInput">IgnoreIdleSlotsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.secondaryLocationInput">SecondaryLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.slotCapacityInput">SlotCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.concurrency">Concurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.ignoreIdleSlots">IgnoreIdleSlots</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.secondaryLocation">SecondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.slotCapacity">SlotCapacity</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.autoscale"></a>

```csharp
public BigqueryReservationAutoscaleOutputReference Autoscale { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference">BigqueryReservationAutoscaleOutputReference</a>

---

##### `OriginalPrimaryLocation`<sup>Required</sup> <a name="OriginalPrimaryLocation" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.originalPrimaryLocation"></a>

```csharp
public string OriginalPrimaryLocation { get; }
```

- *Type:* string

---

##### `PrimaryLocation`<sup>Required</sup> <a name="PrimaryLocation" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.primaryLocation"></a>

```csharp
public string PrimaryLocation { get; }
```

- *Type:* string

---

##### `ReplicationStatus`<sup>Required</sup> <a name="ReplicationStatus" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.replicationStatus"></a>

```csharp
public BigqueryReservationReplicationStatusList ReplicationStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList">BigqueryReservationReplicationStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.timeouts"></a>

```csharp
public BigqueryReservationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference">BigqueryReservationTimeoutsOutputReference</a>

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.autoscaleInput"></a>

```csharp
public BigqueryReservationAutoscale AutoscaleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a>

---

##### `ConcurrencyInput`<sup>Optional</sup> <a name="ConcurrencyInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.concurrencyInput"></a>

```csharp
public double ConcurrencyInput { get; }
```

- *Type:* double

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.editionInput"></a>

```csharp
public string EditionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreIdleSlotsInput`<sup>Optional</sup> <a name="IgnoreIdleSlotsInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.ignoreIdleSlotsInput"></a>

```csharp
public object IgnoreIdleSlotsInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecondaryLocationInput`<sup>Optional</sup> <a name="SecondaryLocationInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.secondaryLocationInput"></a>

```csharp
public string SecondaryLocationInput { get; }
```

- *Type:* string

---

##### `SlotCapacityInput`<sup>Optional</sup> <a name="SlotCapacityInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.slotCapacityInput"></a>

```csharp
public double SlotCapacityInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Concurrency`<sup>Required</sup> <a name="Concurrency" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.concurrency"></a>

```csharp
public double Concurrency { get; }
```

- *Type:* double

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreIdleSlots`<sup>Required</sup> <a name="IgnoreIdleSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.ignoreIdleSlots"></a>

```csharp
public object IgnoreIdleSlots { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecondaryLocation`<sup>Required</sup> <a name="SecondaryLocation" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.secondaryLocation"></a>

```csharp
public string SecondaryLocation { get; }
```

- *Type:* string

---

##### `SlotCapacity`<sup>Required</sup> <a name="SlotCapacity" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.slotCapacity"></a>

```csharp
public double SlotCapacity { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryReservationAutoscale <a name="BigqueryReservationAutoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationAutoscale {
    double MaxSlots = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale.property.maxSlots">MaxSlots</a></code> | <code>double</code> | Number of slots to be scaled when needed. |

---

##### `MaxSlots`<sup>Optional</sup> <a name="MaxSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale.property.maxSlots"></a>

```csharp
public double MaxSlots { get; set; }
```

- *Type:* double

Number of slots to be scaled when needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#max_slots BigqueryReservation#max_slots}

---

### BigqueryReservationConfig <a name="BigqueryReservationConfig" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double SlotCapacity,
    BigqueryReservationAutoscale Autoscale = null,
    double Concurrency = null,
    string Edition = null,
    string Id = null,
    object IgnoreIdleSlots = null,
    string Location = null,
    string Project = null,
    string SecondaryLocation = null,
    BigqueryReservationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.name">Name</a></code> | <code>string</code> | The name of the reservation. This field must only contain alphanumeric characters or dash. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.slotCapacity">SlotCapacity</a></code> | <code>double</code> | Minimum slots available to this reservation. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.concurrency">Concurrency</a></code> | <code>double</code> | Maximum number of queries that are allowed to run concurrently in this reservation. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.edition">Edition</a></code> | <code>string</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#id BigqueryReservation#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.ignoreIdleSlots">IgnoreIdleSlots</a></code> | <code>object</code> | If false, any query using this reservation will use idle slots from other reservations within the same admin project. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#project BigqueryReservation#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.secondaryLocation">SecondaryLocation</a></code> | <code>string</code> | The current location of the reservation's secondary replica. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts">BigqueryReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the reservation. This field must only contain alphanumeric characters or dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#name BigqueryReservation#name}

---

##### `SlotCapacity`<sup>Required</sup> <a name="SlotCapacity" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.slotCapacity"></a>

```csharp
public double SlotCapacity { get; set; }
```

- *Type:* double

Minimum slots available to this reservation.

A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#slot_capacity BigqueryReservation#slot_capacity}

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.autoscale"></a>

```csharp
public BigqueryReservationAutoscale Autoscale { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#autoscale BigqueryReservation#autoscale}

---

##### `Concurrency`<sup>Optional</sup> <a name="Concurrency" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.concurrency"></a>

```csharp
public double Concurrency { get; set; }
```

- *Type:* double

Maximum number of queries that are allowed to run concurrently in this reservation.

This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#concurrency BigqueryReservation#concurrency}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.edition"></a>

```csharp
public string Edition { get; set; }
```

- *Type:* string

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#edition BigqueryReservation#edition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#id BigqueryReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreIdleSlots`<sup>Optional</sup> <a name="IgnoreIdleSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.ignoreIdleSlots"></a>

```csharp
public object IgnoreIdleSlots { get; set; }
```

- *Type:* object

If false, any query using this reservation will use idle slots from other reservations within the same admin project.

If true, a query using this reservation will execute with the slot
capacity specified above at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#ignore_idle_slots BigqueryReservation#ignore_idle_slots}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#location BigqueryReservation#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#project BigqueryReservation#project}.

---

##### `SecondaryLocation`<sup>Optional</sup> <a name="SecondaryLocation" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.secondaryLocation"></a>

```csharp
public string SecondaryLocation { get; set; }
```

- *Type:* string

The current location of the reservation's secondary replica.

This field is only set for
reservations using the managed disaster recovery feature. Users can set this in create
reservation calls to create a failover reservation or in update reservation calls to convert
a non-failover reservation to a failover reservation(or vice versa).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#secondary_location BigqueryReservation#secondary_location}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.timeouts"></a>

```csharp
public BigqueryReservationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts">BigqueryReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#timeouts BigqueryReservation#timeouts}

---

### BigqueryReservationReplicationStatus <a name="BigqueryReservationReplicationStatus" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationReplicationStatus {

};
```


### BigqueryReservationReplicationStatusError <a name="BigqueryReservationReplicationStatusError" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationReplicationStatusError {

};
```


### BigqueryReservationTimeouts <a name="BigqueryReservationTimeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#create BigqueryReservation#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#delete BigqueryReservation#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#update BigqueryReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#create BigqueryReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#delete BigqueryReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_reservation#update BigqueryReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryReservationAutoscaleOutputReference <a name="BigqueryReservationAutoscaleOutputReference" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationAutoscaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resetMaxSlots">ResetMaxSlots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSlots` <a name="ResetMaxSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resetMaxSlots"></a>

```csharp
private void ResetMaxSlots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.currentSlots">CurrentSlots</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.maxSlotsInput">MaxSlotsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.maxSlots">MaxSlots</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentSlots`<sup>Required</sup> <a name="CurrentSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.currentSlots"></a>

```csharp
public double CurrentSlots { get; }
```

- *Type:* double

---

##### `MaxSlotsInput`<sup>Optional</sup> <a name="MaxSlotsInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.maxSlotsInput"></a>

```csharp
public double MaxSlotsInput { get; }
```

- *Type:* double

---

##### `MaxSlots`<sup>Required</sup> <a name="MaxSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.maxSlots"></a>

```csharp
public double MaxSlots { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.internalValue"></a>

```csharp
public BigqueryReservationAutoscale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a>

---


### BigqueryReservationReplicationStatusErrorList <a name="BigqueryReservationReplicationStatusErrorList" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationReplicationStatusErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.get"></a>

```csharp
private BigqueryReservationReplicationStatusErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BigqueryReservationReplicationStatusErrorOutputReference <a name="BigqueryReservationReplicationStatusErrorOutputReference" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationReplicationStatusErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusError">BigqueryReservationReplicationStatusError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorOutputReference.property.internalValue"></a>

```csharp
public BigqueryReservationReplicationStatusError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusError">BigqueryReservationReplicationStatusError</a>

---


### BigqueryReservationReplicationStatusList <a name="BigqueryReservationReplicationStatusList" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationReplicationStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.get"></a>

```csharp
private BigqueryReservationReplicationStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BigqueryReservationReplicationStatusOutputReference <a name="BigqueryReservationReplicationStatusOutputReference" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationReplicationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList">BigqueryReservationReplicationStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.lastErrorTime">LastErrorTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.lastReplicationTime">LastReplicationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatus">BigqueryReservationReplicationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.error"></a>

```csharp
public BigqueryReservationReplicationStatusErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusErrorList">BigqueryReservationReplicationStatusErrorList</a>

---

##### `LastErrorTime`<sup>Required</sup> <a name="LastErrorTime" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.lastErrorTime"></a>

```csharp
public string LastErrorTime { get; }
```

- *Type:* string

---

##### `LastReplicationTime`<sup>Required</sup> <a name="LastReplicationTime" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.lastReplicationTime"></a>

```csharp
public string LastReplicationTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatusOutputReference.property.internalValue"></a>

```csharp
public BigqueryReservationReplicationStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationReplicationStatus">BigqueryReservationReplicationStatus</a>

---


### BigqueryReservationTimeoutsOutputReference <a name="BigqueryReservationTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryReservationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



