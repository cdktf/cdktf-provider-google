# `computePerInstanceConfig` Submodule <a name="`computePerInstanceConfig` Submodule" id="@cdktf/provider-google.computePerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePerInstanceConfig <a name="ComputePerInstanceConfig" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config google_compute_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfig(Construct Scope, string Id, ComputePerInstanceConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig">ComputePerInstanceConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig">ComputePerInstanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putPreservedState">PutPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetMinimalAction">ResetMinimalAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetMostDisruptiveAllowedAction">ResetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetPreservedState">ResetPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetRemoveInstanceOnDestroy">ResetRemoveInstanceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy">ResetRemoveInstanceStateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPreservedState` <a name="PutPreservedState" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putPreservedState"></a>

```csharp
private void PutPreservedState(ComputePerInstanceConfigPreservedState Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putPreservedState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputePerInstanceConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinimalAction` <a name="ResetMinimalAction" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetMinimalAction"></a>

```csharp
private void ResetMinimalAction()
```

##### `ResetMostDisruptiveAllowedAction` <a name="ResetMostDisruptiveAllowedAction" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetMostDisruptiveAllowedAction"></a>

```csharp
private void ResetMostDisruptiveAllowedAction()
```

##### `ResetPreservedState` <a name="ResetPreservedState" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetPreservedState"></a>

```csharp
private void ResetPreservedState()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRemoveInstanceOnDestroy` <a name="ResetRemoveInstanceOnDestroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetRemoveInstanceOnDestroy"></a>

```csharp
private void ResetRemoveInstanceOnDestroy()
```

##### `ResetRemoveInstanceStateOnDestroy` <a name="ResetRemoveInstanceStateOnDestroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy"></a>

```csharp
private void ResetRemoveInstanceStateOnDestroy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputePerInstanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePerInstanceConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePerInstanceConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePerInstanceConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePerInstanceConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputePerInstanceConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputePerInstanceConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputePerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputePerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.preservedState">PreservedState</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference">ComputePerInstanceConfigPreservedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference">ComputePerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.instanceGroupManagerInput">InstanceGroupManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.minimalActionInput">MinimalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput">MostDisruptiveAllowedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.preservedStateInput">PreservedStateInput</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceOnDestroyInput">RemoveInstanceOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput">RemoveInstanceStateOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.minimalAction">MinimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceOnDestroy">RemoveInstanceOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceStateOnDestroy">RemoveInstanceStateOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PreservedState`<sup>Required</sup> <a name="PreservedState" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.preservedState"></a>

```csharp
public ComputePerInstanceConfigPreservedStateOutputReference PreservedState { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference">ComputePerInstanceConfigPreservedStateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.timeouts"></a>

```csharp
public ComputePerInstanceConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference">ComputePerInstanceConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceGroupManagerInput`<sup>Optional</sup> <a name="InstanceGroupManagerInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.instanceGroupManagerInput"></a>

```csharp
public string InstanceGroupManagerInput { get; }
```

- *Type:* string

---

##### `MinimalActionInput`<sup>Optional</sup> <a name="MinimalActionInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.minimalActionInput"></a>

```csharp
public string MinimalActionInput { get; }
```

- *Type:* string

---

##### `MostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="MostDisruptiveAllowedActionInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput"></a>

```csharp
public string MostDisruptiveAllowedActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreservedStateInput`<sup>Optional</sup> <a name="PreservedStateInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.preservedStateInput"></a>

```csharp
public ComputePerInstanceConfigPreservedState PreservedStateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RemoveInstanceOnDestroyInput`<sup>Optional</sup> <a name="RemoveInstanceOnDestroyInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceOnDestroyInput"></a>

```csharp
public object RemoveInstanceOnDestroyInput { get; }
```

- *Type:* object

---

##### `RemoveInstanceStateOnDestroyInput`<sup>Optional</sup> <a name="RemoveInstanceStateOnDestroyInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput"></a>

```csharp
public object RemoveInstanceStateOnDestroyInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.instanceGroupManager"></a>

```csharp
public string InstanceGroupManager { get; }
```

- *Type:* string

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.minimalAction"></a>

```csharp
public string MinimalAction { get; }
```

- *Type:* string

---

##### `MostDisruptiveAllowedAction`<sup>Required</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.mostDisruptiveAllowedAction"></a>

```csharp
public string MostDisruptiveAllowedAction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RemoveInstanceOnDestroy`<sup>Required</sup> <a name="RemoveInstanceOnDestroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceOnDestroy"></a>

```csharp
public object RemoveInstanceOnDestroy { get; }
```

- *Type:* object

---

##### `RemoveInstanceStateOnDestroy`<sup>Required</sup> <a name="RemoveInstanceStateOnDestroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceStateOnDestroy"></a>

```csharp
public object RemoveInstanceStateOnDestroy { get; }
```

- *Type:* object

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePerInstanceConfigConfig <a name="ComputePerInstanceConfigConfig" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceGroupManager,
    string Name,
    string Id = null,
    string MinimalAction = null,
    string MostDisruptiveAllowedAction = null,
    ComputePerInstanceConfigPreservedState PreservedState = null,
    string Project = null,
    object RemoveInstanceOnDestroy = null,
    object RemoveInstanceStateOnDestroy = null,
    ComputePerInstanceConfigTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>string</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.name">Name</a></code> | <code>string</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#id ComputePerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.minimalAction">MinimalAction</a></code> | <code>string</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.preservedState">PreservedState</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#project ComputePerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.removeInstanceOnDestroy">RemoveInstanceOnDestroy</a></code> | <code>object</code> | When true, deleting this config will immediately remove the underlying instance. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy">RemoveInstanceStateOnDestroy</a></code> | <code>object</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.zone">Zone</a></code> | <code>string</code> | Zone where the containing instance group manager is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.instanceGroupManager"></a>

```csharp
public string InstanceGroupManager { get; set; }
```

- *Type:* string

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#instance_group_manager ComputePerInstanceConfig#instance_group_manager}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#name ComputePerInstanceConfig#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#id ComputePerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimalAction`<sup>Optional</sup> <a name="MinimalAction" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.minimalAction"></a>

```csharp
public string MinimalAction { get; set; }
```

- *Type:* string

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#minimal_action ComputePerInstanceConfig#minimal_action}

---

##### `MostDisruptiveAllowedAction`<sup>Optional</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction"></a>

```csharp
public string MostDisruptiveAllowedAction { get; set; }
```

- *Type:* string

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#most_disruptive_allowed_action ComputePerInstanceConfig#most_disruptive_allowed_action}

---

##### `PreservedState`<sup>Optional</sup> <a name="PreservedState" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.preservedState"></a>

```csharp
public ComputePerInstanceConfigPreservedState PreservedState { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#preserved_state ComputePerInstanceConfig#preserved_state}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#project ComputePerInstanceConfig#project}.

---

##### `RemoveInstanceOnDestroy`<sup>Optional</sup> <a name="RemoveInstanceOnDestroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.removeInstanceOnDestroy"></a>

```csharp
public object RemoveInstanceOnDestroy { get; set; }
```

- *Type:* object

When true, deleting this config will immediately remove the underlying instance.

When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#remove_instance_on_destroy ComputePerInstanceConfig#remove_instance_on_destroy}

---

##### `RemoveInstanceStateOnDestroy`<sup>Optional</sup> <a name="RemoveInstanceStateOnDestroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy"></a>

```csharp
public object RemoveInstanceStateOnDestroy { get; set; }
```

- *Type:* object

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#remove_instance_state_on_destroy ComputePerInstanceConfig#remove_instance_state_on_destroy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.timeouts"></a>

```csharp
public ComputePerInstanceConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#timeouts ComputePerInstanceConfig#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#zone ComputePerInstanceConfig#zone}

---

### ComputePerInstanceConfigPreservedState <a name="ComputePerInstanceConfigPreservedState" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedState {
    object Disk = null,
    object ExternalIp = null,
    object InternalIp = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.disk">Disk</a></code> | <code>object</code> | disk block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.externalIp">ExternalIp</a></code> | <code>object</code> | external_ip block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.internalIp">InternalIp</a></code> | <code>object</code> | internal_ip block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Preserved metadata defined for this instance. This is a list of key->value pairs. |

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.disk"></a>

```csharp
public object Disk { get; set; }
```

- *Type:* object

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#disk ComputePerInstanceConfig#disk}

---

##### `ExternalIp`<sup>Optional</sup> <a name="ExternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.externalIp"></a>

```csharp
public object ExternalIp { get; set; }
```

- *Type:* object

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#external_ip ComputePerInstanceConfig#external_ip}

---

##### `InternalIp`<sup>Optional</sup> <a name="InternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.internalIp"></a>

```csharp
public object InternalIp { get; set; }
```

- *Type:* object

internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#internal_ip ComputePerInstanceConfig#internal_ip}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#metadata ComputePerInstanceConfig#metadata}

---

### ComputePerInstanceConfigPreservedStateDisk <a name="ComputePerInstanceConfigPreservedStateDisk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateDisk {
    string DeviceName,
    string Source,
    string DeleteRule = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.source">Source</a></code> | <code>string</code> | The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.mode">Mode</a></code> | <code>string</code> | The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#device_name ComputePerInstanceConfig#device_name}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#source ComputePerInstanceConfig#source}

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#delete_rule ComputePerInstanceConfig#delete_rule}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#mode ComputePerInstanceConfig#mode}

---

### ComputePerInstanceConfigPreservedStateExternalIp <a name="ComputePerInstanceConfigPreservedStateExternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateExternalIp {
    string InterfaceName,
    string AutoDelete = null,
    ComputePerInstanceConfigPreservedStateExternalIpIpAddress IpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#interface_name ComputePerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIp.property.autoDelete">AutoDelete</a></code> | <code>string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIp.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress">ComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | ip_address block. |

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#interface_name ComputePerInstanceConfig#interface_name}.

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIp.property.autoDelete"></a>

```csharp
public string AutoDelete { get; set; }
```

- *Type:* string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#auto_delete ComputePerInstanceConfig#auto_delete}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIp.property.ipAddress"></a>

```csharp
public ComputePerInstanceConfigPreservedStateExternalIpIpAddress IpAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress">ComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#ip_address ComputePerInstanceConfig#ip_address}

---

### ComputePerInstanceConfigPreservedStateExternalIpIpAddress <a name="ComputePerInstanceConfigPreservedStateExternalIpIpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateExternalIpIpAddress {
    string Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress.property.address">Address</a></code> | <code>string</code> | The URL of the reservation for this IP address. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#address ComputePerInstanceConfig#address}

---

### ComputePerInstanceConfigPreservedStateInternalIp <a name="ComputePerInstanceConfigPreservedStateInternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateInternalIp {
    string InterfaceName,
    string AutoDelete = null,
    ComputePerInstanceConfigPreservedStateInternalIpIpAddress IpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#interface_name ComputePerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIp.property.autoDelete">AutoDelete</a></code> | <code>string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIp.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress">ComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | ip_address block. |

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#interface_name ComputePerInstanceConfig#interface_name}.

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIp.property.autoDelete"></a>

```csharp
public string AutoDelete { get; set; }
```

- *Type:* string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#auto_delete ComputePerInstanceConfig#auto_delete}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIp.property.ipAddress"></a>

```csharp
public ComputePerInstanceConfigPreservedStateInternalIpIpAddress IpAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress">ComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#ip_address ComputePerInstanceConfig#ip_address}

---

### ComputePerInstanceConfigPreservedStateInternalIpIpAddress <a name="ComputePerInstanceConfigPreservedStateInternalIpIpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateInternalIpIpAddress {
    string Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress.property.address">Address</a></code> | <code>string</code> | The URL of the reservation for this IP address. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#address ComputePerInstanceConfig#address}

---

### ComputePerInstanceConfigTimeouts <a name="ComputePerInstanceConfigTimeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#create ComputePerInstanceConfig#create}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#delete ComputePerInstanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#update ComputePerInstanceConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#create ComputePerInstanceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#delete ComputePerInstanceConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_per_instance_config#update ComputePerInstanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePerInstanceConfigPreservedStateDiskList <a name="ComputePerInstanceConfigPreservedStateDiskList" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.get"></a>

```csharp
private ComputePerInstanceConfigPreservedStateDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePerInstanceConfigPreservedStateDiskOutputReference <a name="ComputePerInstanceConfigPreservedStateDiskOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference <a name="ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress">ComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue"></a>

```csharp
public ComputePerInstanceConfigPreservedStateExternalIpIpAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress">ComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---


### ComputePerInstanceConfigPreservedStateExternalIpList <a name="ComputePerInstanceConfigPreservedStateExternalIpList" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateExternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.get"></a>

```csharp
private ComputePerInstanceConfigPreservedStateExternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePerInstanceConfigPreservedStateExternalIpOutputReference <a name="ComputePerInstanceConfigPreservedStateExternalIpOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateExternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress">PutIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAddress` <a name="PutIpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress"></a>

```csharp
private void PutIpAddress(ComputePerInstanceConfigPreservedStateExternalIpIpAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress">ComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete"></a>

```csharp
private void ResetAutoDelete()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress">ComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete">AutoDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress"></a>

```csharp
public ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference IpAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput"></a>

```csharp
public string AutoDeleteInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput"></a>

```csharp
public ComputePerInstanceConfigPreservedStateExternalIpIpAddress IpAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpIpAddress">ComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete"></a>

```csharp
public string AutoDelete { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference <a name="ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress">ComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue"></a>

```csharp
public ComputePerInstanceConfigPreservedStateInternalIpIpAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress">ComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---


### ComputePerInstanceConfigPreservedStateInternalIpList <a name="ComputePerInstanceConfigPreservedStateInternalIpList" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateInternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.get"></a>

```csharp
private ComputePerInstanceConfigPreservedStateInternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePerInstanceConfigPreservedStateInternalIpOutputReference <a name="ComputePerInstanceConfigPreservedStateInternalIpOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateInternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress">PutIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAddress` <a name="PutIpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress"></a>

```csharp
private void PutIpAddress(ComputePerInstanceConfigPreservedStateInternalIpIpAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress">ComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete"></a>

```csharp
private void ResetAutoDelete()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress">ComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete">AutoDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress"></a>

```csharp
public ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference IpAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput"></a>

```csharp
public string AutoDeleteInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput"></a>

```csharp
public ComputePerInstanceConfigPreservedStateInternalIpIpAddress IpAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpIpAddress">ComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete"></a>

```csharp
public string AutoDelete { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePerInstanceConfigPreservedStateOutputReference <a name="ComputePerInstanceConfigPreservedStateOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigPreservedStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putDisk">PutDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putExternalIp">PutExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putInternalIp">PutInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetDisk">ResetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetExternalIp">ResetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetInternalIp">ResetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisk` <a name="PutDisk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putDisk"></a>

```csharp
private void PutDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putDisk.parameter.value"></a>

- *Type:* object

---

##### `PutExternalIp` <a name="PutExternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putExternalIp"></a>

```csharp
private void PutExternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putExternalIp.parameter.value"></a>

- *Type:* object

---

##### `PutInternalIp` <a name="PutInternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putInternalIp"></a>

```csharp
private void PutInternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putInternalIp.parameter.value"></a>

- *Type:* object

---

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetDisk"></a>

```csharp
private void ResetDisk()
```

##### `ResetExternalIp` <a name="ResetExternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetExternalIp"></a>

```csharp
private void ResetExternalIp()
```

##### `ResetInternalIp` <a name="ResetInternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetInternalIp"></a>

```csharp
private void ResetInternalIp()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList">ComputePerInstanceConfigPreservedStateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.externalIp">ExternalIp</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList">ComputePerInstanceConfigPreservedStateExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.internalIp">InternalIp</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList">ComputePerInstanceConfigPreservedStateInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.diskInput">DiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.externalIpInput">ExternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.internalIpInput">InternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.disk"></a>

```csharp
public ComputePerInstanceConfigPreservedStateDiskList Disk { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList">ComputePerInstanceConfigPreservedStateDiskList</a>

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.externalIp"></a>

```csharp
public ComputePerInstanceConfigPreservedStateExternalIpList ExternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateExternalIpList">ComputePerInstanceConfigPreservedStateExternalIpList</a>

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.internalIp"></a>

```csharp
public ComputePerInstanceConfigPreservedStateInternalIpList InternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateInternalIpList">ComputePerInstanceConfigPreservedStateInternalIpList</a>

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.diskInput"></a>

```csharp
public object DiskInput { get; }
```

- *Type:* object

---

##### `ExternalIpInput`<sup>Optional</sup> <a name="ExternalIpInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.externalIpInput"></a>

```csharp
public object ExternalIpInput { get; }
```

- *Type:* object

---

##### `InternalIpInput`<sup>Optional</sup> <a name="InternalIpInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.internalIpInput"></a>

```csharp
public object InternalIpInput { get; }
```

- *Type:* object

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.internalValue"></a>

```csharp
public ComputePerInstanceConfigPreservedState InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a>

---


### ComputePerInstanceConfigTimeoutsOutputReference <a name="ComputePerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePerInstanceConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



