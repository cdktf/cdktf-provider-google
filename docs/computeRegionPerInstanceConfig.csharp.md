# `computeRegionPerInstanceConfig` Submodule <a name="`computeRegionPerInstanceConfig` Submodule" id="@cdktf/provider-google.computeRegionPerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionPerInstanceConfig <a name="ComputeRegionPerInstanceConfig" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config google_compute_region_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfig(Construct Scope, string Id, ComputeRegionPerInstanceConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig">ComputeRegionPerInstanceConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig">ComputeRegionPerInstanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState">PutPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMinimalAction">ResetMinimalAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMostDisruptiveAllowedAction">ResetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetPreservedState">ResetPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRemoveInstanceStateOnDestroy">ResetRemoveInstanceStateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPreservedState` <a name="PutPreservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState"></a>

```csharp
private void PutPreservedState(ComputeRegionPerInstanceConfigPreservedState Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionPerInstanceConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinimalAction` <a name="ResetMinimalAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMinimalAction"></a>

```csharp
private void ResetMinimalAction()
```

##### `ResetMostDisruptiveAllowedAction` <a name="ResetMostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMostDisruptiveAllowedAction"></a>

```csharp
private void ResetMostDisruptiveAllowedAction()
```

##### `ResetPreservedState` <a name="ResetPreservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetPreservedState"></a>

```csharp
private void ResetPreservedState()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRemoveInstanceStateOnDestroy` <a name="ResetRemoveInstanceStateOnDestroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRemoveInstanceStateOnDestroy"></a>

```csharp
private void ResetRemoveInstanceStateOnDestroy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionPerInstanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionPerInstanceConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionPerInstanceConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionPerInstanceConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionPerInstanceConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRegionPerInstanceConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionPerInstanceConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionPerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionPerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedState">PreservedState</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference">ComputeRegionPerInstanceConfigPreservedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference">ComputeRegionPerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalActionInput">MinimalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedActionInput">MostDisruptiveAllowedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedStateInput">PreservedStateInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManagerInput">RegionInstanceGroupManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroyInput">RemoveInstanceStateOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalAction">MinimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManager">RegionInstanceGroupManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroy">RemoveInstanceStateOnDestroy</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PreservedState`<sup>Required</sup> <a name="PreservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedState"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateOutputReference PreservedState { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference">ComputeRegionPerInstanceConfigPreservedStateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeouts"></a>

```csharp
public ComputeRegionPerInstanceConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference">ComputeRegionPerInstanceConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MinimalActionInput`<sup>Optional</sup> <a name="MinimalActionInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalActionInput"></a>

```csharp
public string MinimalActionInput { get; }
```

- *Type:* string

---

##### `MostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="MostDisruptiveAllowedActionInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedActionInput"></a>

```csharp
public string MostDisruptiveAllowedActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreservedStateInput`<sup>Optional</sup> <a name="PreservedStateInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedStateInput"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedState PreservedStateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegionInstanceGroupManagerInput`<sup>Optional</sup> <a name="RegionInstanceGroupManagerInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManagerInput"></a>

```csharp
public string RegionInstanceGroupManagerInput { get; }
```

- *Type:* string

---

##### `RemoveInstanceStateOnDestroyInput`<sup>Optional</sup> <a name="RemoveInstanceStateOnDestroyInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroyInput"></a>

```csharp
public object RemoveInstanceStateOnDestroyInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalAction"></a>

```csharp
public string MinimalAction { get; }
```

- *Type:* string

---

##### `MostDisruptiveAllowedAction`<sup>Required</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedAction"></a>

```csharp
public string MostDisruptiveAllowedAction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RegionInstanceGroupManager`<sup>Required</sup> <a name="RegionInstanceGroupManager" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManager"></a>

```csharp
public string RegionInstanceGroupManager { get; }
```

- *Type:* string

---

##### `RemoveInstanceStateOnDestroy`<sup>Required</sup> <a name="RemoveInstanceStateOnDestroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroy"></a>

```csharp
public object RemoveInstanceStateOnDestroy { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionPerInstanceConfigConfig <a name="ComputeRegionPerInstanceConfigConfig" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RegionInstanceGroupManager,
    string Id = null,
    string MinimalAction = null,
    string MostDisruptiveAllowedAction = null,
    ComputeRegionPerInstanceConfigPreservedState PreservedState = null,
    string Project = null,
    string Region = null,
    object RemoveInstanceStateOnDestroy = null,
    ComputeRegionPerInstanceConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.name">Name</a></code> | <code>string</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.regionInstanceGroupManager">RegionInstanceGroupManager</a></code> | <code>string</code> | The region instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.minimalAction">MinimalAction</a></code> | <code>string</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.preservedState">PreservedState</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.region">Region</a></code> | <code>string</code> | Region where the containing instance group manager is located. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.removeInstanceStateOnDestroy">RemoveInstanceStateOnDestroy</a></code> | <code>object</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#name ComputeRegionPerInstanceConfig#name}

---

##### `RegionInstanceGroupManager`<sup>Required</sup> <a name="RegionInstanceGroupManager" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.regionInstanceGroupManager"></a>

```csharp
public string RegionInstanceGroupManager { get; set; }
```

- *Type:* string

The region instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#region_instance_group_manager ComputeRegionPerInstanceConfig#region_instance_group_manager}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimalAction`<sup>Optional</sup> <a name="MinimalAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.minimalAction"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#minimal_action ComputeRegionPerInstanceConfig#minimal_action}

---

##### `MostDisruptiveAllowedAction`<sup>Optional</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.mostDisruptiveAllowedAction"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#most_disruptive_allowed_action ComputeRegionPerInstanceConfig#most_disruptive_allowed_action}

---

##### `PreservedState`<sup>Optional</sup> <a name="PreservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.preservedState"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedState PreservedState { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#preserved_state ComputeRegionPerInstanceConfig#preserved_state}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#region ComputeRegionPerInstanceConfig#region}

---

##### `RemoveInstanceStateOnDestroy`<sup>Optional</sup> <a name="RemoveInstanceStateOnDestroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.removeInstanceStateOnDestroy"></a>

```csharp
public object RemoveInstanceStateOnDestroy { get; set; }
```

- *Type:* object

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#remove_instance_state_on_destroy ComputeRegionPerInstanceConfig#remove_instance_state_on_destroy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.timeouts"></a>

```csharp
public ComputeRegionPerInstanceConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#timeouts ComputeRegionPerInstanceConfig#timeouts}

---

### ComputeRegionPerInstanceConfigPreservedState <a name="ComputeRegionPerInstanceConfigPreservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedState {
    object Disk = null,
    object ExternalIp = null,
    object InternalIp = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.disk">Disk</a></code> | <code>object</code> | disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.externalIp">ExternalIp</a></code> | <code>object</code> | external_ip block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.internalIp">InternalIp</a></code> | <code>object</code> | internal_ip block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Preserved metadata defined for this instance. This is a list of key->value pairs. |

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.disk"></a>

```csharp
public object Disk { get; set; }
```

- *Type:* object

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#disk ComputeRegionPerInstanceConfig#disk}

---

##### `ExternalIp`<sup>Optional</sup> <a name="ExternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.externalIp"></a>

```csharp
public object ExternalIp { get; set; }
```

- *Type:* object

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#external_ip ComputeRegionPerInstanceConfig#external_ip}

---

##### `InternalIp`<sup>Optional</sup> <a name="InternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.internalIp"></a>

```csharp
public object InternalIp { get; set; }
```

- *Type:* object

internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#internal_ip ComputeRegionPerInstanceConfig#internal_ip}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#metadata ComputeRegionPerInstanceConfig#metadata}

---

### ComputeRegionPerInstanceConfigPreservedStateDisk <a name="ComputeRegionPerInstanceConfigPreservedStateDisk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateDisk {
    string DeviceName,
    string Source,
    string DeleteRule = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.source">Source</a></code> | <code>string</code> | The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.mode">Mode</a></code> | <code>string</code> | The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#device_name ComputeRegionPerInstanceConfig#device_name}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#source ComputeRegionPerInstanceConfig#source}

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#delete_rule ComputeRegionPerInstanceConfig#delete_rule}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#mode ComputeRegionPerInstanceConfig#mode}

---

### ComputeRegionPerInstanceConfigPreservedStateExternalIp <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateExternalIp {
    string InterfaceName,
    string AutoDelete = null,
    ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress IpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.autoDelete">AutoDelete</a></code> | <code>string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | ip_address block. |

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}.

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.autoDelete"></a>

```csharp
public string AutoDelete { get; set; }
```

- *Type:* string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#auto_delete ComputeRegionPerInstanceConfig#auto_delete}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.ipAddress"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress IpAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#ip_address ComputeRegionPerInstanceConfig#ip_address}

---

### ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress {
    string Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.property.address">Address</a></code> | <code>string</code> | The URL of the reservation for this IP address. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}

---

### ComputeRegionPerInstanceConfigPreservedStateInternalIp <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateInternalIp {
    string InterfaceName,
    string AutoDelete = null,
    ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress IpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.autoDelete">AutoDelete</a></code> | <code>string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | ip_address block. |

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}.

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.autoDelete"></a>

```csharp
public string AutoDelete { get; set; }
```

- *Type:* string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#auto_delete ComputeRegionPerInstanceConfig#auto_delete}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.ipAddress"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress IpAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#ip_address ComputeRegionPerInstanceConfig#ip_address}

---

### ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress {
    string Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.property.address">Address</a></code> | <code>string</code> | The URL of the reservation for this IP address. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}

---

### ComputeRegionPerInstanceConfigTimeouts <a name="ComputeRegionPerInstanceConfigTimeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#create ComputeRegionPerInstanceConfig#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#delete ComputeRegionPerInstanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#update ComputeRegionPerInstanceConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#create ComputeRegionPerInstanceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#delete ComputeRegionPerInstanceConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_region_per_instance_config#update ComputeRegionPerInstanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionPerInstanceConfigPreservedStateDiskList <a name="ComputeRegionPerInstanceConfigPreservedStateDiskList" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.get"></a>

```csharp
private ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---


### ComputeRegionPerInstanceConfigPreservedStateExternalIpList <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpList" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateExternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.get"></a>

```csharp
private ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress">PutIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAddress` <a name="PutIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress"></a>

```csharp
private void PutIpAddress(ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete"></a>

```csharp
private void ResetAutoDelete()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete">AutoDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference IpAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput"></a>

```csharp
public string AutoDeleteInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress IpAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete"></a>

```csharp
public string AutoDelete { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---


### ComputeRegionPerInstanceConfigPreservedStateInternalIpList <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpList" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateInternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.get"></a>

```csharp
private ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress">PutIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAddress` <a name="PutIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress"></a>

```csharp
private void PutIpAddress(ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete"></a>

```csharp
private void ResetAutoDelete()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete">AutoDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference IpAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput"></a>

```csharp
public string AutoDeleteInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress IpAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete"></a>

```csharp
public string AutoDelete { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionPerInstanceConfigPreservedStateOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigPreservedStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk">PutDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp">PutExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp">PutInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetDisk">ResetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetExternalIp">ResetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetInternalIp">ResetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisk` <a name="PutDisk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk"></a>

```csharp
private void PutDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk.parameter.value"></a>

- *Type:* object

---

##### `PutExternalIp` <a name="PutExternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp"></a>

```csharp
private void PutExternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp.parameter.value"></a>

- *Type:* object

---

##### `PutInternalIp` <a name="PutInternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp"></a>

```csharp
private void PutInternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp.parameter.value"></a>

- *Type:* object

---

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetDisk"></a>

```csharp
private void ResetDisk()
```

##### `ResetExternalIp` <a name="ResetExternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetExternalIp"></a>

```csharp
private void ResetExternalIp()
```

##### `ResetInternalIp` <a name="ResetInternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetInternalIp"></a>

```csharp
private void ResetInternalIp()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList">ComputeRegionPerInstanceConfigPreservedStateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIp">ExternalIp</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList">ComputeRegionPerInstanceConfigPreservedStateExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIp">InternalIp</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList">ComputeRegionPerInstanceConfigPreservedStateInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.diskInput">DiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIpInput">ExternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIpInput">InternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.disk"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateDiskList Disk { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList">ComputeRegionPerInstanceConfigPreservedStateDiskList</a>

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIp"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateExternalIpList ExternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList">ComputeRegionPerInstanceConfigPreservedStateExternalIpList</a>

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIp"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedStateInternalIpList InternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList">ComputeRegionPerInstanceConfigPreservedStateInternalIpList</a>

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.diskInput"></a>

```csharp
public object DiskInput { get; }
```

- *Type:* object

---

##### `ExternalIpInput`<sup>Optional</sup> <a name="ExternalIpInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIpInput"></a>

```csharp
public object ExternalIpInput { get; }
```

- *Type:* object

---

##### `InternalIpInput`<sup>Optional</sup> <a name="InternalIpInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIpInput"></a>

```csharp
public object InternalIpInput { get; }
```

- *Type:* object

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionPerInstanceConfigPreservedState InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

---


### ComputeRegionPerInstanceConfigTimeoutsOutputReference <a name="ComputeRegionPerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionPerInstanceConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



