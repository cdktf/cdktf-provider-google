# `bigqueryCapacityCommitment` Submodule <a name="`bigqueryCapacityCommitment` Submodule" id="@cdktf/provider-google.bigqueryCapacityCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryCapacityCommitment <a name="BigqueryCapacityCommitment" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment google_bigquery_capacity_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryCapacityCommitment(Construct Scope, string Id, BigqueryCapacityCommitmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig">BigqueryCapacityCommitmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig">BigqueryCapacityCommitmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetCapacityCommitmentId">ResetCapacityCommitmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg">ResetEnforceSingleAdminProjectPerOrg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetRenewalPlan">ResetRenewalPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts"></a>

```csharp
private void PutTimeouts(BigqueryCapacityCommitmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

---

##### `ResetCapacityCommitmentId` <a name="ResetCapacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetCapacityCommitmentId"></a>

```csharp
private void ResetCapacityCommitmentId()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEdition"></a>

```csharp
private void ResetEdition()
```

##### `ResetEnforceSingleAdminProjectPerOrg` <a name="ResetEnforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg"></a>

```csharp
private void ResetEnforceSingleAdminProjectPerOrg()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRenewalPlan` <a name="ResetRenewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetRenewalPlan"></a>

```csharp
private void ResetRenewalPlan()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryCapacityCommitment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryCapacityCommitment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryCapacityCommitment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryCapacityCommitment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryCapacityCommitment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryCapacityCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryCapacityCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentEndTime">CommitmentEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentStartTime">CommitmentStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference">BigqueryCapacityCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentIdInput">CapacityCommitmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.editionInput">EditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput">EnforceSingleAdminProjectPerOrgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlanInput">RenewalPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCountInput">SlotCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentId">CapacityCommitmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg">EnforceSingleAdminProjectPerOrg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlan">RenewalPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCount">SlotCount</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CommitmentEndTime`<sup>Required</sup> <a name="CommitmentEndTime" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentEndTime"></a>

```csharp
public string CommitmentEndTime { get; }
```

- *Type:* string

---

##### `CommitmentStartTime`<sup>Required</sup> <a name="CommitmentStartTime" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentStartTime"></a>

```csharp
public string CommitmentStartTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeouts"></a>

```csharp
public BigqueryCapacityCommitmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference">BigqueryCapacityCommitmentTimeoutsOutputReference</a>

---

##### `CapacityCommitmentIdInput`<sup>Optional</sup> <a name="CapacityCommitmentIdInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentIdInput"></a>

```csharp
public string CapacityCommitmentIdInput { get; }
```

- *Type:* string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.editionInput"></a>

```csharp
public string EditionInput { get; }
```

- *Type:* string

---

##### `EnforceSingleAdminProjectPerOrgInput`<sup>Optional</sup> <a name="EnforceSingleAdminProjectPerOrgInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput"></a>

```csharp
public string EnforceSingleAdminProjectPerOrgInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RenewalPlanInput`<sup>Optional</sup> <a name="RenewalPlanInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlanInput"></a>

```csharp
public string RenewalPlanInput { get; }
```

- *Type:* string

---

##### `SlotCountInput`<sup>Optional</sup> <a name="SlotCountInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCountInput"></a>

```csharp
public double SlotCountInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CapacityCommitmentId`<sup>Required</sup> <a name="CapacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentId"></a>

```csharp
public string CapacityCommitmentId { get; }
```

- *Type:* string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `EnforceSingleAdminProjectPerOrg`<sup>Required</sup> <a name="EnforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg"></a>

```csharp
public string EnforceSingleAdminProjectPerOrg { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RenewalPlan`<sup>Required</sup> <a name="RenewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlan"></a>

```csharp
public string RenewalPlan { get; }
```

- *Type:* string

---

##### `SlotCount`<sup>Required</sup> <a name="SlotCount" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCount"></a>

```csharp
public double SlotCount { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryCapacityCommitmentConfig <a name="BigqueryCapacityCommitmentConfig" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryCapacityCommitmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Plan,
    double SlotCount,
    string CapacityCommitmentId = null,
    string Edition = null,
    string EnforceSingleAdminProjectPerOrg = null,
    string Id = null,
    string Location = null,
    string Project = null,
    string RenewalPlan = null,
    BigqueryCapacityCommitmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.plan">Plan</a></code> | <code>string</code> | Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.slotCount">SlotCount</a></code> | <code>double</code> | Number of slots in this commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.capacityCommitmentId">CapacityCommitmentId</a></code> | <code>string</code> | The optional capacity commitment ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.edition">Edition</a></code> | <code>string</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg">EnforceSingleAdminProjectPerOrg</a></code> | <code>string</code> | If true, fail the request if another project in the organization has a capacity commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.renewalPlan">RenewalPlan</a></code> | <code>string</code> | The plan this capacity commitment is converted to after commitmentEndTime passes. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#plan BigqueryCapacityCommitment#plan}

---

##### `SlotCount`<sup>Required</sup> <a name="SlotCount" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.slotCount"></a>

```csharp
public double SlotCount { get; set; }
```

- *Type:* double

Number of slots in this commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#slot_count BigqueryCapacityCommitment#slot_count}

---

##### `CapacityCommitmentId`<sup>Optional</sup> <a name="CapacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.capacityCommitmentId"></a>

```csharp
public string CapacityCommitmentId { get; set; }
```

- *Type:* string

The optional capacity commitment ID.

Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#capacity_commitment_id BigqueryCapacityCommitment#capacity_commitment_id}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.edition"></a>

```csharp
public string Edition { get; set; }
```

- *Type:* string

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#edition BigqueryCapacityCommitment#edition}

---

##### `EnforceSingleAdminProjectPerOrg`<sup>Optional</sup> <a name="EnforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg"></a>

```csharp
public string EnforceSingleAdminProjectPerOrg { get; set; }
```

- *Type:* string

If true, fail the request if another project in the organization has a capacity commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#enforce_single_admin_project_per_org BigqueryCapacityCommitment#enforce_single_admin_project_per_org}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#location BigqueryCapacityCommitment#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}.

---

##### `RenewalPlan`<sup>Optional</sup> <a name="RenewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.renewalPlan"></a>

```csharp
public string RenewalPlan { get; set; }
```

- *Type:* string

The plan this capacity commitment is converted to after commitmentEndTime passes.

Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#renewal_plan BigqueryCapacityCommitment#renewal_plan}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.timeouts"></a>

```csharp
public BigqueryCapacityCommitmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#timeouts BigqueryCapacityCommitment#timeouts}

---

### BigqueryCapacityCommitmentTimeouts <a name="BigqueryCapacityCommitmentTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryCapacityCommitmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryCapacityCommitmentTimeoutsOutputReference <a name="BigqueryCapacityCommitmentTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryCapacityCommitmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



