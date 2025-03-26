# `computeAutoscaler` Submodule <a name="`computeAutoscaler` Submodule" id="@cdktf/provider-google.computeAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeAutoscaler <a name="ComputeAutoscaler" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler google_compute_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscaler(Construct Scope, string Id, ComputeAutoscalerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig">ComputeAutoscalerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig">ComputeAutoscalerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putAutoscalingPolicy">PutAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscalingPolicy` <a name="PutAutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putAutoscalingPolicy"></a>

```csharp
private void PutAutoscalingPolicy(ComputeAutoscalerAutoscalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeAutoscalerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeAutoscaler resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeAutoscaler.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeAutoscaler.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeAutoscaler.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeAutoscaler.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeAutoscaler resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeAutoscaler to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeAutoscaler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeAutoscaler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference">ComputeAutoscalerAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference">ComputeAutoscalerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicy"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyOutputReference AutoscalingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference">ComputeAutoscalerAutoscalingPolicyOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeouts"></a>

```csharp
public ComputeAutoscalerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference">ComputeAutoscalerTimeoutsOutputReference</a>

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicyInput"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicy AutoscalingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeAutoscalerAutoscalingPolicy <a name="ComputeAutoscalerAutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicy {
    double MaxReplicas,
    double MinReplicas,
    double CooldownPeriod = null,
    ComputeAutoscalerAutoscalingPolicyCpuUtilization CpuUtilization = null,
    ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization LoadBalancingUtilization = null,
    object Metric = null,
    string Mode = null,
    ComputeAutoscalerAutoscalingPolicyScaleInControl ScaleInControl = null,
    object ScalingSchedules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | The maximum number of instances that the autoscaler can scale up to. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.minReplicas">MinReplicas</a></code> | <code>double</code> | The minimum number of replicas that the autoscaler can scale down to. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod">CooldownPeriod</a></code> | <code>double</code> | The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization">LoadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | load_balancing_utilization block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.metric">Metric</a></code> | <code>object</code> | metric block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.mode">Mode</a></code> | <code>string</code> | Defines operating mode for this policy. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scaleInControl">ScaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | scale_in_control block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scalingSchedules">ScalingSchedules</a></code> | <code>object</code> | scaling_schedules block. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; set; }
```

- *Type:* double

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#max_replicas ComputeAutoscaler#max_replicas}

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.minReplicas"></a>

```csharp
public double MinReplicas { get; set; }
```

- *Type:* double

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#min_replicas ComputeAutoscaler#min_replicas}

---

##### `CooldownPeriod`<sup>Optional</sup> <a name="CooldownPeriod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#cooldown_period ComputeAutoscaler#cooldown_period}

---

##### `CpuUtilization`<sup>Optional</sup> <a name="CpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cpuUtilization"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyCpuUtilization CpuUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#cpu_utilization ComputeAutoscaler#cpu_utilization}

---

##### `LoadBalancingUtilization`<sup>Optional</sup> <a name="LoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization LoadBalancingUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#load_balancing_utilization ComputeAutoscaler#load_balancing_utilization}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.metric"></a>

```csharp
public object Metric { get; set; }
```

- *Type:* object

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#metric ComputeAutoscaler#metric}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Defines operating mode for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#mode ComputeAutoscaler#mode}

---

##### `ScaleInControl`<sup>Optional</sup> <a name="ScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scaleInControl"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyScaleInControl ScaleInControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#scale_in_control ComputeAutoscaler#scale_in_control}

---

##### `ScalingSchedules`<sup>Optional</sup> <a name="ScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scalingSchedules"></a>

```csharp
public object ScalingSchedules { get; set; }
```

- *Type:* object

scaling_schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#scaling_schedules ComputeAutoscaler#scaling_schedules}

---

### ComputeAutoscalerAutoscalingPolicyCpuUtilization <a name="ComputeAutoscalerAutoscalingPolicyCpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyCpuUtilization {
    double Target,
    string PredictiveMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target">Target</a></code> | <code>double</code> | The target CPU utilization that the autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod">PredictiveMethod</a></code> | <code>string</code> | Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `PredictiveMethod`<sup>Optional</sup> <a name="PredictiveMethod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod"></a>

```csharp
public string PredictiveMethod { get; set; }
```

- *Type:* string

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

* NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
* OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#predictive_method ComputeAutoscaler#predictive_method}

---

### ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization <a name="ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization {
    double Target
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target">Target</a></code> | <code>double</code> | Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#target ComputeAutoscaler#target}

---

### ComputeAutoscalerAutoscalingPolicyMetric <a name="ComputeAutoscalerAutoscalingPolicyMetric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyMetric {
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
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.name">Name</a></code> | <code>string</code> | The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.filter">Filter</a></code> | <code>string</code> | A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment">SingleInstanceAssignment</a></code> | <code>double</code> | If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.target">Target</a></code> | <code>double</code> | The target value of the metric that autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.type">Type</a></code> | <code>string</code> | Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#name ComputeAutoscaler#name}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.filter"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#filter ComputeAutoscaler#filter}

---

##### `SingleInstanceAssignment`<sup>Optional</sup> <a name="SingleInstanceAssignment" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#single_instance_assignment ComputeAutoscaler#single_instance_assignment}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.target"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#type ComputeAutoscaler#type}

---

### ComputeAutoscalerAutoscalingPolicyScaleInControl <a name="ComputeAutoscalerAutoscalingPolicyScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyScaleInControl {
    ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas MaxScaledInReplicas = null,
    double TimeWindowSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas">MaxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | max_scaled_in_replicas block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec">TimeWindowSec</a></code> | <code>double</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `MaxScaledInReplicas`<sup>Optional</sup> <a name="MaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas MaxScaledInReplicas { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#max_scaled_in_replicas ComputeAutoscaler#max_scaled_in_replicas}

---

##### `TimeWindowSec`<sup>Optional</sup> <a name="TimeWindowSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec"></a>

```csharp
public double TimeWindowSec { get; set; }
```

- *Type:* double

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#time_window_sec ComputeAutoscaler#time_window_sec}

---

### ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas <a name="ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas {
    double Fixed = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed">Fixed</a></code> | <code>double</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent">Percent</a></code> | <code>double</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed"></a>

```csharp
public double Fixed { get; set; }
```

- *Type:* double

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#fixed ComputeAutoscaler#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#percent ComputeAutoscaler#percent}

---

### ComputeAutoscalerAutoscalingPolicyScalingSchedules <a name="ComputeAutoscalerAutoscalingPolicyScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyScalingSchedules {
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
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec">DurationSec</a></code> | <code>double</code> | The duration of time intervals (in seconds) for which this scaling schedule will be running. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas">MinRequiredReplicas</a></code> | <code>double</code> | Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#name ComputeAutoscaler#name}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule">Schedule</a></code> | <code>string</code> | The start timestamps of time intervals when this scaling schedule should provide a scaling signal. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description">Description</a></code> | <code>string</code> | A description of a scaling schedule. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled">Disabled</a></code> | <code>object</code> | A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone to be used when interpreting the schedule. |

---

##### `DurationSec`<sup>Required</sup> <a name="DurationSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec"></a>

```csharp
public double DurationSec { get; set; }
```

- *Type:* double

The duration of time intervals (in seconds) for which this scaling schedule will be running.

The minimum allowed value is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#duration_sec ComputeAutoscaler#duration_sec}

---

##### `MinRequiredReplicas`<sup>Required</sup> <a name="MinRequiredReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas"></a>

```csharp
public double MinRequiredReplicas { get; set; }
```

- *Type:* double

Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#min_required_replicas ComputeAutoscaler#min_required_replicas}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#name ComputeAutoscaler#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

The start timestamps of time intervals when this scaling schedule should provide a scaling signal.

This field uses the extended cron format (with an optional year field).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#schedule ComputeAutoscaler#schedule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of a scaling schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#description ComputeAutoscaler#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

A boolean value that specifies if a scaling schedule can influence autoscaler recommendations.

If set to true, then a scaling schedule has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#disabled ComputeAutoscaler#disabled}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone to be used when interpreting the schedule.

The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#time_zone ComputeAutoscaler#time_zone}

---

### ComputeAutoscalerConfig <a name="ComputeAutoscalerConfig" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ComputeAutoscalerAutoscalingPolicy AutoscalingPolicy,
    string Name,
    string Target,
    string Description = null,
    string Id = null,
    string Project = null,
    ComputeAutoscalerTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.target">Target</a></code> | <code>string</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#id ComputeAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#project ComputeAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.zone">Zone</a></code> | <code>string</code> | URL of the zone where the instance group resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.autoscalingPolicy"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicy AutoscalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#autoscaling_policy ComputeAutoscaler#autoscaling_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#name ComputeAutoscaler#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#description ComputeAutoscaler#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#id ComputeAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#project ComputeAutoscaler#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.timeouts"></a>

```csharp
public ComputeAutoscalerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#timeouts ComputeAutoscaler#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

URL of the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#zone ComputeAutoscaler#zone}

---

### ComputeAutoscalerTimeouts <a name="ComputeAutoscalerTimeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#create ComputeAutoscaler#create}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#delete ComputeAutoscaler#delete}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#update ComputeAutoscaler#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#create ComputeAutoscaler#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#delete ComputeAutoscaler#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_autoscaler#update ComputeAutoscaler#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference <a name="ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod">ResetPredictiveMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredictiveMethod` <a name="ResetPredictiveMethod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod"></a>

```csharp
private void ResetPredictiveMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput">PredictiveMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod">PredictiveMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictiveMethodInput`<sup>Optional</sup> <a name="PredictiveMethodInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput"></a>

```csharp
public string PredictiveMethodInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `PredictiveMethod`<sup>Required</sup> <a name="PredictiveMethod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod"></a>

```csharp
public string PredictiveMethod { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyCpuUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---


### ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference <a name="ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---


### ComputeAutoscalerAutoscalingPolicyMetricList <a name="ComputeAutoscalerAutoscalingPolicyMetricList" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.get"></a>

```csharp
private ComputeAutoscalerAutoscalingPolicyMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeAutoscalerAutoscalingPolicyMetricOutputReference <a name="ComputeAutoscalerAutoscalingPolicyMetricOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment">ResetSingleInstanceAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetSingleInstanceAssignment` <a name="ResetSingleInstanceAssignment" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment"></a>

```csharp
private void ResetSingleInstanceAssignment()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput">SingleInstanceAssignmentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment">SingleInstanceAssignment</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SingleInstanceAssignmentInput`<sup>Optional</sup> <a name="SingleInstanceAssignmentInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput"></a>

```csharp
public double SingleInstanceAssignmentInput { get; }
```

- *Type:* double

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SingleInstanceAssignment`<sup>Required</sup> <a name="SingleInstanceAssignment" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment"></a>

```csharp
public double SingleInstanceAssignment { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeAutoscalerAutoscalingPolicyOutputReference <a name="ComputeAutoscalerAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization">PutCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization">PutLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl">PutScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules">PutScalingSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod">ResetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization">ResetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization">ResetLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl">ResetScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules">ResetScalingSchedules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCpuUtilization` <a name="PutCpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization"></a>

```csharp
private void PutCpuUtilization(ComputeAutoscalerAutoscalingPolicyCpuUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `PutLoadBalancingUtilization` <a name="PutLoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization"></a>

```csharp
private void PutLoadBalancingUtilization(ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putMetric"></a>

```csharp
private void PutMetric(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putMetric.parameter.value"></a>

- *Type:* object

---

##### `PutScaleInControl` <a name="PutScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl"></a>

```csharp
private void PutScaleInControl(ComputeAutoscalerAutoscalingPolicyScaleInControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `PutScalingSchedules` <a name="PutScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules"></a>

```csharp
private void PutScalingSchedules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules.parameter.value"></a>

- *Type:* object

---

##### `ResetCooldownPeriod` <a name="ResetCooldownPeriod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod"></a>

```csharp
private void ResetCooldownPeriod()
```

##### `ResetCpuUtilization` <a name="ResetCpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization"></a>

```csharp
private void ResetCpuUtilization()
```

##### `ResetLoadBalancingUtilization` <a name="ResetLoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization"></a>

```csharp
private void ResetLoadBalancingUtilization()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetScaleInControl` <a name="ResetScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl"></a>

```csharp
private void ResetScaleInControl()
```

##### `ResetScalingSchedules` <a name="ResetScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules"></a>

```csharp
private void ResetScalingSchedules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization">LoadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList">ComputeAutoscalerAutoscalingPolicyMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl">ScaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules">ScalingSchedules</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput">CooldownPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput">CpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput">LoadBalancingUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput">MetricInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput">ScaleInControlInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput">ScalingSchedulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas">MinReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference CpuUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a>

---

##### `LoadBalancingUtilization`<sup>Required</sup> <a name="LoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference LoadBalancingUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metric"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyMetricList Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList">ComputeAutoscalerAutoscalingPolicyMetricList</a>

---

##### `ScaleInControl`<sup>Required</sup> <a name="ScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference ScaleInControl { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a>

---

##### `ScalingSchedules`<sup>Required</sup> <a name="ScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyScalingSchedulesList ScalingSchedules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a>

---

##### `CooldownPeriodInput`<sup>Optional</sup> <a name="CooldownPeriodInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput"></a>

```csharp
public double CooldownPeriodInput { get; }
```

- *Type:* double

---

##### `CpuUtilizationInput`<sup>Optional</sup> <a name="CpuUtilizationInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyCpuUtilization CpuUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `LoadBalancingUtilizationInput`<sup>Optional</sup> <a name="LoadBalancingUtilizationInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization LoadBalancingUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput"></a>

```csharp
public double MaxReplicasInput { get; }
```

- *Type:* double

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput"></a>

```csharp
public object MetricInput { get; }
```

- *Type:* object

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput"></a>

```csharp
public double MinReplicasInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ScaleInControlInput`<sup>Optional</sup> <a name="ScaleInControlInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyScaleInControl ScaleInControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `ScalingSchedulesInput`<sup>Optional</sup> <a name="ScalingSchedulesInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput"></a>

```csharp
public object ScalingSchedulesInput { get; }
```

- *Type:* object

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod"></a>

```csharp
public double CooldownPeriod { get; }
```

- *Type:* double

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; }
```

- *Type:* double

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas"></a>

```csharp
public double MinReplicas { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

---


### ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference <a name="ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed"></a>

```csharp
private void ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput">FixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed">Fixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput"></a>

```csharp
public double FixedInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed"></a>

```csharp
public double Fixed { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---


### ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference <a name="ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas">PutMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas">ResetMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec">ResetTimeWindowSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxScaledInReplicas` <a name="PutMaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas"></a>

```csharp
private void PutMaxScaledInReplicas(ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `ResetMaxScaledInReplicas` <a name="ResetMaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas"></a>

```csharp
private void ResetMaxScaledInReplicas()
```

##### `ResetTimeWindowSec` <a name="ResetTimeWindowSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec"></a>

```csharp
private void ResetTimeWindowSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas">MaxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput">MaxScaledInReplicasInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput">TimeWindowSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec">TimeWindowSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxScaledInReplicas`<sup>Required</sup> <a name="MaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference MaxScaledInReplicas { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a>

---

##### `MaxScaledInReplicasInput`<sup>Optional</sup> <a name="MaxScaledInReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas MaxScaledInReplicasInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `TimeWindowSecInput`<sup>Optional</sup> <a name="TimeWindowSecInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput"></a>

```csharp
public double TimeWindowSecInput { get; }
```

- *Type:* double

---

##### `TimeWindowSec`<sup>Required</sup> <a name="TimeWindowSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec"></a>

```csharp
public double TimeWindowSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue"></a>

```csharp
public ComputeAutoscalerAutoscalingPolicyScaleInControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---


### ComputeAutoscalerAutoscalingPolicyScalingSchedulesList <a name="ComputeAutoscalerAutoscalingPolicyScalingSchedulesList" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyScalingSchedulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get"></a>

```csharp
private ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference <a name="ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput">DurationSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput">MinRequiredReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec">DurationSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas">MinRequiredReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DurationSecInput`<sup>Optional</sup> <a name="DurationSecInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput"></a>

```csharp
public double DurationSecInput { get; }
```

- *Type:* double

---

##### `MinRequiredReplicasInput`<sup>Optional</sup> <a name="MinRequiredReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput"></a>

```csharp
public double MinRequiredReplicasInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DurationSec`<sup>Required</sup> <a name="DurationSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec"></a>

```csharp
public double DurationSec { get; }
```

- *Type:* double

---

##### `MinRequiredReplicas`<sup>Required</sup> <a name="MinRequiredReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas"></a>

```csharp
public double MinRequiredReplicas { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeAutoscalerTimeoutsOutputReference <a name="ComputeAutoscalerTimeoutsOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeAutoscalerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



