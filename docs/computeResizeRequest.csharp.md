# `computeResizeRequest` Submodule <a name="`computeResizeRequest` Submodule" id="@cdktf/provider-google.computeResizeRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeResizeRequest <a name="ComputeResizeRequest" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request google_compute_resize_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequest(Construct Scope, string Id, ComputeResizeRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig">ComputeResizeRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig">ComputeResizeRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putRequestedRunDuration">PutRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetRequestedRunDuration">ResetRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRequestedRunDuration` <a name="PutRequestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putRequestedRunDuration"></a>

```csharp
private void PutRequestedRunDuration(ComputeResizeRequestRequestedRunDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putRequestedRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeResizeRequestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRequestedRunDuration` <a name="ResetRequestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetRequestedRunDuration"></a>

```csharp
private void ResetRequestedRunDuration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeResizeRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeResizeRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeResizeRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeResizeRequest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeResizeRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeResizeRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeResizeRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeResizeRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeResizeRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.requestedRunDuration">RequestedRunDuration</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference">ComputeResizeRequestRequestedRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList">ComputeResizeRequestStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference">ComputeResizeRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.instanceGroupManagerInput">InstanceGroupManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.requestedRunDurationInput">RequestedRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.resizeByInput">ResizeByInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.resizeBy">ResizeBy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `RequestedRunDuration`<sup>Required</sup> <a name="RequestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.requestedRunDuration"></a>

```csharp
public ComputeResizeRequestRequestedRunDurationOutputReference RequestedRunDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference">ComputeResizeRequestRequestedRunDurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.status"></a>

```csharp
public ComputeResizeRequestStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList">ComputeResizeRequestStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.timeouts"></a>

```csharp
public ComputeResizeRequestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference">ComputeResizeRequestTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceGroupManagerInput`<sup>Optional</sup> <a name="InstanceGroupManagerInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.instanceGroupManagerInput"></a>

```csharp
public string InstanceGroupManagerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RequestedRunDurationInput`<sup>Optional</sup> <a name="RequestedRunDurationInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.requestedRunDurationInput"></a>

```csharp
public ComputeResizeRequestRequestedRunDuration RequestedRunDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a>

---

##### `ResizeByInput`<sup>Optional</sup> <a name="ResizeByInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.resizeByInput"></a>

```csharp
public double ResizeByInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.instanceGroupManager"></a>

```csharp
public string InstanceGroupManager { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResizeBy`<sup>Required</sup> <a name="ResizeBy" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.resizeBy"></a>

```csharp
public double ResizeBy { get; }
```

- *Type:* double

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeResizeRequestConfig <a name="ComputeResizeRequestConfig" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceGroupManager,
    string Name,
    double ResizeBy,
    string Zone,
    string Description = null,
    string Id = null,
    string Project = null,
    ComputeResizeRequestRequestedRunDuration RequestedRunDuration = null,
    ComputeResizeRequestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>string</code> | The name of the managed instance group. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.name">Name</a></code> | <code>string</code> | The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.resizeBy">ResizeBy</a></code> | <code>double</code> | The number of instances to be created by this resize request. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.zone">Zone</a></code> | <code>string</code> | Name of the compute zone scoping this request. Name should conform to RFC1035. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resize-request. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#id ComputeResizeRequest#id}. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#project ComputeResizeRequest#project}. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.requestedRunDuration">RequestedRunDuration</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a></code> | requested_run_duration block. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.instanceGroupManager"></a>

```csharp
public string InstanceGroupManager { get; set; }
```

- *Type:* string

The name of the managed instance group.

The name should conform to RFC1035 or be a resource ID.
Authorization requires the following IAM permission on the specified resource instanceGroupManager:
*compute.instanceGroupManagers.update

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#instance_group_manager ComputeResizeRequest#instance_group_manager}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#name ComputeResizeRequest#name}

---

##### `ResizeBy`<sup>Required</sup> <a name="ResizeBy" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.resizeBy"></a>

```csharp
public double ResizeBy { get; set; }
```

- *Type:* double

The number of instances to be created by this resize request.

The group's target size will be increased by this number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#resize_by ComputeResizeRequest#resize_by}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Name of the compute zone scoping this request. Name should conform to RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#zone ComputeResizeRequest#zone}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resize-request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#description ComputeResizeRequest#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#id ComputeResizeRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#project ComputeResizeRequest#project}.

---

##### `RequestedRunDuration`<sup>Optional</sup> <a name="RequestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.requestedRunDuration"></a>

```csharp
public ComputeResizeRequestRequestedRunDuration RequestedRunDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a>

requested_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#requested_run_duration ComputeResizeRequest#requested_run_duration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestConfig.property.timeouts"></a>

```csharp
public ComputeResizeRequestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts">ComputeResizeRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#timeouts ComputeResizeRequest#timeouts}

---

### ComputeResizeRequestRequestedRunDuration <a name="ComputeResizeRequestRequestedRunDuration" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestRequestedRunDuration {
    string Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.property.seconds">Seconds</a></code> | <code>string</code> | Span of time at a resolution of a second. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.property.seconds"></a>

```csharp
public string Seconds { get; set; }
```

- *Type:* string

Span of time at a resolution of a second.

Must be from 0 to 315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#seconds ComputeResizeRequest#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#nanos ComputeResizeRequest#nanos}

---

### ComputeResizeRequestStatus <a name="ComputeResizeRequestStatus" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatus {

};
```


### ComputeResizeRequestStatusError <a name="ComputeResizeRequestStatusError" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusError {

};
```


### ComputeResizeRequestStatusErrorErrors <a name="ComputeResizeRequestStatusErrorErrors" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrors {

};
```


### ComputeResizeRequestStatusErrorErrorsErrorDetails <a name="ComputeResizeRequestStatusErrorErrorsErrorDetails" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetails {

};
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo {

};
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp {

};
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks {

};
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage {

};
```


### ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo {

};
```


### ComputeResizeRequestStatusLastAttempt <a name="ComputeResizeRequestStatusLastAttempt" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttempt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttempt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttempt {

};
```


### ComputeResizeRequestStatusLastAttemptError <a name="ComputeResizeRequestStatusLastAttemptError" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptError {

};
```


### ComputeResizeRequestStatusLastAttemptErrorErrors <a name="ComputeResizeRequestStatusLastAttemptErrorErrors" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrors {

};
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails {

};
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo {

};
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp {

};
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks {

};
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage {

};
```


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo {

};
```


### ComputeResizeRequestTimeouts <a name="ComputeResizeRequestTimeouts" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#create ComputeResizeRequest#create}. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#delete ComputeResizeRequest#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#create ComputeResizeRequest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/compute_resize_request#delete ComputeResizeRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeResizeRequestRequestedRunDurationOutputReference <a name="ComputeResizeRequestRequestedRunDurationOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestRequestedRunDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.seconds">Seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.secondsInput"></a>

```csharp
public string SecondsInput { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.seconds"></a>

```csharp
public string Seconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDurationOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestRequestedRunDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestRequestedRunDuration">ComputeResizeRequestRequestedRunDuration</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get"></a>

```csharp
private ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">Metadatas</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Metadatas`<sup>Required</sup> <a name="Metadatas" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```csharp
public StringMap Metadatas { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get"></a>

```csharp
private ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.get"></a>

```csharp
private ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links">Links</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelp</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.get"></a>

```csharp
private ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```csharp
private ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help">Help</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage">LocalizedMessage</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo">QuotaInfo</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetails">ComputeResizeRequestStatusErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList ErrorInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">ComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `Help`<sup>Required</sup> <a name="Help" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList Help { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList">ComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList</a>

---

##### `LocalizedMessage`<sup>Required</sup> <a name="LocalizedMessage" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList LocalizedMessage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">ComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `QuotaInfo`<sup>Required</sup> <a name="QuotaInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList QuotaInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetails">ComputeResizeRequestStatusErrorErrorsErrorDetails</a>

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```csharp
private ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">Dimensions</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">FutureLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">LimitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">RolloutStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```csharp
public StringMap Dimensions { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FutureLimit`<sup>Required</sup> <a name="FutureLimit" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```csharp
public double FutureLimit { get; }
```

- *Type:* double

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `LimitName`<sup>Required</sup> <a name="LimitName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```csharp
public string LimitName { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `RolloutStatus`<sup>Required</sup> <a name="RolloutStatus" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```csharp
public string RolloutStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">ComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a>

---


### ComputeResizeRequestStatusErrorErrorsList <a name="ComputeResizeRequestStatusErrorErrorsList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.get"></a>

```csharp
private ComputeResizeRequestStatusErrorErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorErrorsOutputReference <a name="ComputeResizeRequestStatusErrorErrorsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList">ComputeResizeRequestStatusErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrors">ComputeResizeRequestStatusErrorErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.errorDetails"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsErrorDetailsList ErrorDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsErrorDetailsList">ComputeResizeRequestStatusErrorErrorsErrorDetailsList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusErrorErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrors">ComputeResizeRequestStatusErrorErrors</a>

---


### ComputeResizeRequestStatusErrorList <a name="ComputeResizeRequestStatusErrorList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.get"></a>

```csharp
private ComputeResizeRequestStatusErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusErrorOutputReference <a name="ComputeResizeRequestStatusErrorOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList">ComputeResizeRequestStatusErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusError">ComputeResizeRequestStatusError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.errors"></a>

```csharp
public ComputeResizeRequestStatusErrorErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorErrorsList">ComputeResizeRequestStatusErrorErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusError">ComputeResizeRequestStatusError</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get"></a>

```csharp
private ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">Metadatas</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Metadatas`<sup>Required</sup> <a name="Metadatas" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```csharp
public StringMap Metadatas { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get"></a>

```csharp
private ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get"></a>

```csharp
private ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links">Links</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get"></a>

```csharp
private ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```csharp
private ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help">Help</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage">LocalizedMessage</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo">QuotaInfo</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList ErrorInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `Help`<sup>Required</sup> <a name="Help" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList Help { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a>

---

##### `LocalizedMessage`<sup>Required</sup> <a name="LocalizedMessage" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList LocalizedMessage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `QuotaInfo`<sup>Required</sup> <a name="QuotaInfo" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList QuotaInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```csharp
private ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">Dimensions</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">FutureLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">LimitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">RolloutStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```csharp
public StringMap Dimensions { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FutureLimit`<sup>Required</sup> <a name="FutureLimit" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```csharp
public double FutureLimit { get; }
```

- *Type:* double

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `LimitName`<sup>Required</sup> <a name="LimitName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```csharp
public string LimitName { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `RolloutStatus`<sup>Required</sup> <a name="RolloutStatus" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```csharp
public string RolloutStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a>

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsList <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.get"></a>

```csharp
private ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrors">ComputeResizeRequestStatusLastAttemptErrorErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList ErrorDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">ComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrors">ComputeResizeRequestStatusLastAttemptErrorErrors</a>

---


### ComputeResizeRequestStatusLastAttemptErrorList <a name="ComputeResizeRequestStatusLastAttemptErrorList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.get"></a>

```csharp
private ComputeResizeRequestStatusLastAttemptErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptErrorOutputReference <a name="ComputeResizeRequestStatusLastAttemptErrorOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList">ComputeResizeRequestStatusLastAttemptErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptError">ComputeResizeRequestStatusLastAttemptError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.errors"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorErrorsList">ComputeResizeRequestStatusLastAttemptErrorErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptError">ComputeResizeRequestStatusLastAttemptError</a>

---


### ComputeResizeRequestStatusLastAttemptList <a name="ComputeResizeRequestStatusLastAttemptList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.get"></a>

```csharp
private ComputeResizeRequestStatusLastAttemptOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusLastAttemptOutputReference <a name="ComputeResizeRequestStatusLastAttemptOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusLastAttemptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList">ComputeResizeRequestStatusLastAttemptErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttempt">ComputeResizeRequestStatusLastAttempt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.error"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptErrorList">ComputeResizeRequestStatusLastAttemptErrorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatusLastAttempt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttempt">ComputeResizeRequestStatusLastAttempt</a>

---


### ComputeResizeRequestStatusList <a name="ComputeResizeRequestStatusList" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.get"></a>

```csharp
private ComputeResizeRequestStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeResizeRequestStatusOutputReference <a name="ComputeResizeRequestStatusOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList">ComputeResizeRequestStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.lastAttempt">LastAttempt</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList">ComputeResizeRequestStatusLastAttemptList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatus">ComputeResizeRequestStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.error"></a>

```csharp
public ComputeResizeRequestStatusErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusErrorList">ComputeResizeRequestStatusErrorList</a>

---

##### `LastAttempt`<sup>Required</sup> <a name="LastAttempt" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.lastAttempt"></a>

```csharp
public ComputeResizeRequestStatusLastAttemptList LastAttempt { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusLastAttemptList">ComputeResizeRequestStatusLastAttemptList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatusOutputReference.property.internalValue"></a>

```csharp
public ComputeResizeRequestStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestStatus">ComputeResizeRequestStatus</a>

---


### ComputeResizeRequestTimeoutsOutputReference <a name="ComputeResizeRequestTimeoutsOutputReference" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResizeRequestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResizeRequest.ComputeResizeRequestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



