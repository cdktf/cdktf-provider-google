# `computeRegionAutoscaler` Submodule <a name="`computeRegionAutoscaler` Submodule" id="@cdktf/provider-google.computeRegionAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionAutoscaler <a name="ComputeRegionAutoscaler" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler google_compute_region_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscaler(Construct Scope, string Id, ComputeRegionAutoscalerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig">ComputeRegionAutoscalerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig">ComputeRegionAutoscalerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy">PutAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscalingPolicy` <a name="PutAutoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy"></a>

```csharp
private void PutAutoscalingPolicy(ComputeRegionAutoscalerAutoscalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionAutoscalerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionAutoscaler resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionAutoscaler.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionAutoscaler.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionAutoscaler.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionAutoscaler.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRegionAutoscaler resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionAutoscaler to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionAutoscaler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionAutoscaler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference">ComputeRegionAutoscalerAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference">ComputeRegionAutoscalerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicy"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyOutputReference AutoscalingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference">ComputeRegionAutoscalerAutoscalingPolicyOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeouts"></a>

```csharp
public ComputeRegionAutoscalerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference">ComputeRegionAutoscalerTimeoutsOutputReference</a>

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicyInput"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicy AutoscalingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionAutoscalerAutoscalingPolicy <a name="ComputeRegionAutoscalerAutoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicy {
    double MaxReplicas,
    double MinReplicas,
    double CooldownPeriod = null,
    ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization CpuUtilization = null,
    ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization LoadBalancingUtilization = null,
    object Metric = null,
    string Mode = null,
    ComputeRegionAutoscalerAutoscalingPolicyScaleInControl ScaleInControl = null,
    object ScalingSchedules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | The maximum number of instances that the autoscaler can scale up to. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.minReplicas">MinReplicas</a></code> | <code>double</code> | The minimum number of replicas that the autoscaler can scale down to. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cooldownPeriod">CooldownPeriod</a></code> | <code>double</code> | The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.loadBalancingUtilization">LoadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | load_balancing_utilization block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.metric">Metric</a></code> | <code>object</code> | metric block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.mode">Mode</a></code> | <code>string</code> | Defines operating mode for this policy. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scaleInControl">ScaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | scale_in_control block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scalingSchedules">ScalingSchedules</a></code> | <code>object</code> | scaling_schedules block. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; set; }
```

- *Type:* double

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#max_replicas ComputeRegionAutoscaler#max_replicas}

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.minReplicas"></a>

```csharp
public double MinReplicas { get; set; }
```

- *Type:* double

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#min_replicas ComputeRegionAutoscaler#min_replicas}

---

##### `CooldownPeriod`<sup>Optional</sup> <a name="CooldownPeriod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cooldownPeriod"></a>

```csharp
public double CooldownPeriod { get; set; }
```

- *Type:* double

The number of seconds that the autoscaler should wait before it starts collecting information from a new instance.

This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#cooldown_period ComputeRegionAutoscaler#cooldown_period}

---

##### `CpuUtilization`<sup>Optional</sup> <a name="CpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cpuUtilization"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization CpuUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#cpu_utilization ComputeRegionAutoscaler#cpu_utilization}

---

##### `LoadBalancingUtilization`<sup>Optional</sup> <a name="LoadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.loadBalancingUtilization"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization LoadBalancingUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#load_balancing_utilization ComputeRegionAutoscaler#load_balancing_utilization}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.metric"></a>

```csharp
public object Metric { get; set; }
```

- *Type:* object

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#metric ComputeRegionAutoscaler#metric}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Defines operating mode for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#mode ComputeRegionAutoscaler#mode}

---

##### `ScaleInControl`<sup>Optional</sup> <a name="ScaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scaleInControl"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControl ScaleInControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#scale_in_control ComputeRegionAutoscaler#scale_in_control}

---

##### `ScalingSchedules`<sup>Optional</sup> <a name="ScalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scalingSchedules"></a>

```csharp
public object ScalingSchedules { get; set; }
```

- *Type:* object

scaling_schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#scaling_schedules ComputeRegionAutoscaler#scaling_schedules}

---

### ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization <a name="ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization {
    double Target,
    string PredictiveMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.target">Target</a></code> | <code>double</code> | The target CPU utilization that the autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod">PredictiveMethod</a></code> | <code>string</code> | Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

The target CPU utilization that the autoscaler should maintain.

Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `PredictiveMethod`<sup>Optional</sup> <a name="PredictiveMethod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod"></a>

```csharp
public string PredictiveMethod { get; set; }
```

- *Type:* string

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

* NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
* OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#predictive_method ComputeRegionAutoscaler#predictive_method}

---

### ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization <a name="ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization {
    double Target
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target">Target</a></code> | <code>double</code> | Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

### ComputeRegionAutoscalerAutoscalingPolicyMetric <a name="ComputeRegionAutoscalerAutoscalingPolicyMetric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyMetric {
    string Name,
    string Filter = null,
    double SingleInstanceAssignment = null,
    double Target = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.name">Name</a></code> | <code>string</code> | The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.filter">Filter</a></code> | <code>string</code> | A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment">SingleInstanceAssignment</a></code> | <code>double</code> | If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.target">Target</a></code> | <code>double</code> | The target value of the metric that autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.type">Type</a></code> | <code>string</code> | Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data.

You can only use the AND operator for joining selectors.
You can only use direct equality comparison operator (=) without
any functions for each selector.
You can specify the metric in both the filter string and in the
metric field. However, if specified in both places, the metric must
be identical.

The monitored resource type determines what kind of values are
expected for the metric. If it is a gce_instance, the autoscaler
expects the metric to include a separate TimeSeries for each
instance in a group. In such a case, you cannot filter on resource
labels.

If the resource type is any other value, the autoscaler expects
this metric to contain values that apply to the entire autoscaled
instance group and resource label filtering can be performed to
point autoscaler at the correct TimeSeries to scale upon.
This is called a per-group metric for the purpose of autoscaling.

If not specified, the type defaults to gce_instance.

You should provide a filter that is selective enough to pick just
one TimeSeries for the autoscaled group or for each of the instances
(if you are using gce_instance resource type). If multiple
TimeSeries are returned upon the query execution, the autoscaler
will sum their respective values to obtain its scaling value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#filter ComputeRegionAutoscaler#filter}

---

##### `SingleInstanceAssignment`<sup>Optional</sup> <a name="SingleInstanceAssignment" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment"></a>

```csharp
public double SingleInstanceAssignment { get; set; }
```

- *Type:* double

If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group.

The autoscaler will keep the number of instances proportional to the
value of this metric, the metric itself should not change value due
to group resizing.

For example, a good metric to use with the target is
'pubsub.googleapis.com/subscription/num_undelivered_messages'
or a custom metric exporting the total number of requests coming to
your instances.

A bad example would be a metric exporting an average or median
latency, since this value can't include a chunk assignable to a
single instance, it could be better used with utilization_target
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#single_instance_assignment ComputeRegionAutoscaler#single_instance_assignment}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

The target value of the metric that autoscaler should maintain.

This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#type ComputeRegionAutoscaler#type}

---

### ComputeRegionAutoscalerAutoscalingPolicyScaleInControl <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyScaleInControl {
    ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas MaxScaledInReplicas = null,
    double TimeWindowSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas">MaxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | max_scaled_in_replicas block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec">TimeWindowSec</a></code> | <code>double</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `MaxScaledInReplicas`<sup>Optional</sup> <a name="MaxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas MaxScaledInReplicas { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#max_scaled_in_replicas ComputeRegionAutoscaler#max_scaled_in_replicas}

---

##### `TimeWindowSec`<sup>Optional</sup> <a name="TimeWindowSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec"></a>

```csharp
public double TimeWindowSec { get; set; }
```

- *Type:* double

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#time_window_sec ComputeRegionAutoscaler#time_window_sec}

---

### ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas {
    double Fixed = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed">Fixed</a></code> | <code>double</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent">Percent</a></code> | <code>double</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed"></a>

```csharp
public double Fixed { get; set; }
```

- *Type:* double

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#fixed ComputeRegionAutoscaler#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#percent ComputeRegionAutoscaler#percent}

---

### ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules <a name="ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules {
    double DurationSec,
    double MinRequiredReplicas,
    string Name,
    string Schedule,
    string Description = null,
    object Disabled = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec">DurationSec</a></code> | <code>double</code> | The duration of time intervals (in seconds) for which this scaling schedule will be running. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas">MinRequiredReplicas</a></code> | <code>double</code> | Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.schedule">Schedule</a></code> | <code>string</code> | The start timestamps of time intervals when this scaling schedule should provide a scaling signal. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.description">Description</a></code> | <code>string</code> | A description of a scaling schedule. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.disabled">Disabled</a></code> | <code>object</code> | A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone to be used when interpreting the schedule. |

---

##### `DurationSec`<sup>Required</sup> <a name="DurationSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec"></a>

```csharp
public double DurationSec { get; set; }
```

- *Type:* double

The duration of time intervals (in seconds) for which this scaling schedule will be running.

The minimum allowed value is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#duration_sec ComputeRegionAutoscaler#duration_sec}

---

##### `MinRequiredReplicas`<sup>Required</sup> <a name="MinRequiredReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas"></a>

```csharp
public double MinRequiredReplicas { get; set; }
```

- *Type:* double

Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#min_required_replicas ComputeRegionAutoscaler#min_required_replicas}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

The start timestamps of time intervals when this scaling schedule should provide a scaling signal.

This field uses the extended cron format (with an optional year field).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#schedule ComputeRegionAutoscaler#schedule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of a scaling schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#description ComputeRegionAutoscaler#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

A boolean value that specifies if a scaling schedule can influence autoscaler recommendations.

If set to true, then a scaling schedule has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#disabled ComputeRegionAutoscaler#disabled}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone to be used when interpreting the schedule.

The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#time_zone ComputeRegionAutoscaler#time_zone}

---

### ComputeRegionAutoscalerConfig <a name="ComputeRegionAutoscalerConfig" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ComputeRegionAutoscalerAutoscalingPolicy AutoscalingPolicy,
    string Name,
    string Target,
    string Description = null,
    string Id = null,
    string Project = null,
    string Region = null,
    ComputeRegionAutoscalerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.target">Target</a></code> | <code>string</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.region">Region</a></code> | <code>string</code> | URL of the region where the instance group resides. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.autoscalingPolicy"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicy AutoscalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#autoscaling_policy ComputeRegionAutoscaler#autoscaling_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#description ComputeRegionAutoscaler#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

URL of the region where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#region ComputeRegionAutoscaler#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.timeouts"></a>

```csharp
public ComputeRegionAutoscalerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#timeouts ComputeRegionAutoscaler#timeouts}

---

### ComputeRegionAutoscalerTimeouts <a name="ComputeRegionAutoscalerTimeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#create ComputeRegionAutoscaler#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#delete ComputeRegionAutoscaler#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#update ComputeRegionAutoscaler#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#create ComputeRegionAutoscaler#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#delete ComputeRegionAutoscaler#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_region_autoscaler#update ComputeRegionAutoscaler#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod">ResetPredictiveMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredictiveMethod` <a name="ResetPredictiveMethod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod"></a>

```csharp
private void ResetPredictiveMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput">PredictiveMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod">PredictiveMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictiveMethodInput`<sup>Optional</sup> <a name="PredictiveMethodInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput"></a>

```csharp
public string PredictiveMethodInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `PredictiveMethod`<sup>Required</sup> <a name="PredictiveMethod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod"></a>

```csharp
public string PredictiveMethod { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyMetricList <a name="ComputeRegionAutoscalerAutoscalingPolicyMetricList" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.get"></a>

```csharp
private ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment">ResetSingleInstanceAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetSingleInstanceAssignment` <a name="ResetSingleInstanceAssignment" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment"></a>

```csharp
private void ResetSingleInstanceAssignment()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput">SingleInstanceAssignmentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment">SingleInstanceAssignment</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SingleInstanceAssignmentInput`<sup>Optional</sup> <a name="SingleInstanceAssignmentInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput"></a>

```csharp
public double SingleInstanceAssignmentInput { get; }
```

- *Type:* double

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SingleInstanceAssignment`<sup>Required</sup> <a name="SingleInstanceAssignment" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment"></a>

```csharp
public double SingleInstanceAssignment { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionAutoscalerAutoscalingPolicyOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization">PutCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization">PutLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl">PutScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules">PutScalingSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod">ResetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization">ResetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization">ResetLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl">ResetScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules">ResetScalingSchedules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCpuUtilization` <a name="PutCpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization"></a>

```csharp
private void PutCpuUtilization(ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `PutLoadBalancingUtilization` <a name="PutLoadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization"></a>

```csharp
private void PutLoadBalancingUtilization(ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric"></a>

```csharp
private void PutMetric(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric.parameter.value"></a>

- *Type:* object

---

##### `PutScaleInControl` <a name="PutScaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl"></a>

```csharp
private void PutScaleInControl(ComputeRegionAutoscalerAutoscalingPolicyScaleInControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `PutScalingSchedules` <a name="PutScalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules"></a>

```csharp
private void PutScalingSchedules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules.parameter.value"></a>

- *Type:* object

---

##### `ResetCooldownPeriod` <a name="ResetCooldownPeriod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod"></a>

```csharp
private void ResetCooldownPeriod()
```

##### `ResetCpuUtilization` <a name="ResetCpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization"></a>

```csharp
private void ResetCpuUtilization()
```

##### `ResetLoadBalancingUtilization` <a name="ResetLoadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization"></a>

```csharp
private void ResetLoadBalancingUtilization()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetScaleInControl` <a name="ResetScaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl"></a>

```csharp
private void ResetScaleInControl()
```

##### `ResetScalingSchedules` <a name="ResetScalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules"></a>

```csharp
private void ResetScalingSchedules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization">LoadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList">ComputeRegionAutoscalerAutoscalingPolicyMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl">ScaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules">ScalingSchedules</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput">CooldownPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput">CpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput">LoadBalancingUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metricInput">MetricInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput">ScaleInControlInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput">ScalingSchedulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicas">MinReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference CpuUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a>

---

##### `LoadBalancingUtilization`<sup>Required</sup> <a name="LoadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference LoadBalancingUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metric"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyMetricList Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList">ComputeRegionAutoscalerAutoscalingPolicyMetricList</a>

---

##### `ScaleInControl`<sup>Required</sup> <a name="ScaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference ScaleInControl { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference</a>

---

##### `ScalingSchedules`<sup>Required</sup> <a name="ScalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList ScalingSchedules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList</a>

---

##### `CooldownPeriodInput`<sup>Optional</sup> <a name="CooldownPeriodInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput"></a>

```csharp
public double CooldownPeriodInput { get; }
```

- *Type:* double

---

##### `CpuUtilizationInput`<sup>Optional</sup> <a name="CpuUtilizationInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization CpuUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `LoadBalancingUtilizationInput`<sup>Optional</sup> <a name="LoadBalancingUtilizationInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization LoadBalancingUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput"></a>

```csharp
public double MaxReplicasInput { get; }
```

- *Type:* double

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metricInput"></a>

```csharp
public object MetricInput { get; }
```

- *Type:* object

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput"></a>

```csharp
public double MinReplicasInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ScaleInControlInput`<sup>Optional</sup> <a name="ScaleInControlInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControl ScaleInControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `ScalingSchedulesInput`<sup>Optional</sup> <a name="ScalingSchedulesInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput"></a>

```csharp
public object ScalingSchedulesInput { get; }
```

- *Type:* object

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod"></a>

```csharp
public double CooldownPeriod { get; }
```

- *Type:* double

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; }
```

- *Type:* double

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicas"></a>

```csharp
public double MinReplicas { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed"></a>

```csharp
private void ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput">FixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed">Fixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput"></a>

```csharp
public double FixedInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed"></a>

```csharp
public double Fixed { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas">PutMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas">ResetMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec">ResetTimeWindowSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxScaledInReplicas` <a name="PutMaxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas"></a>

```csharp
private void PutMaxScaledInReplicas(ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `ResetMaxScaledInReplicas` <a name="ResetMaxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas"></a>

```csharp
private void ResetMaxScaledInReplicas()
```

##### `ResetTimeWindowSec` <a name="ResetTimeWindowSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec"></a>

```csharp
private void ResetTimeWindowSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas">MaxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput">MaxScaledInReplicasInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput">TimeWindowSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec">TimeWindowSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxScaledInReplicas`<sup>Required</sup> <a name="MaxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference MaxScaledInReplicas { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a>

---

##### `MaxScaledInReplicasInput`<sup>Optional</sup> <a name="MaxScaledInReplicasInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas MaxScaledInReplicasInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `TimeWindowSecInput`<sup>Optional</sup> <a name="TimeWindowSecInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput"></a>

```csharp
public double TimeWindowSecInput { get; }
```

- *Type:* double

---

##### `TimeWindowSec`<sup>Required</sup> <a name="TimeWindowSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec"></a>

```csharp
public double TimeWindowSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList <a name="ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get"></a>

```csharp
private ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput">DurationSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput">MinRequiredReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec">DurationSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas">MinRequiredReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DurationSecInput`<sup>Optional</sup> <a name="DurationSecInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput"></a>

```csharp
public double DurationSecInput { get; }
```

- *Type:* double

---

##### `MinRequiredReplicasInput`<sup>Optional</sup> <a name="MinRequiredReplicasInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput"></a>

```csharp
public double MinRequiredReplicasInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DurationSec`<sup>Required</sup> <a name="DurationSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec"></a>

```csharp
public double DurationSec { get; }
```

- *Type:* double

---

##### `MinRequiredReplicas`<sup>Required</sup> <a name="MinRequiredReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas"></a>

```csharp
public double MinRequiredReplicas { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionAutoscalerTimeoutsOutputReference <a name="ComputeRegionAutoscalerTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionAutoscalerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



