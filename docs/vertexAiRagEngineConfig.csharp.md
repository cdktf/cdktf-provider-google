# `vertexAiRagEngineConfig` Submodule <a name="`vertexAiRagEngineConfig` Submodule" id="@cdktf/provider-google.vertexAiRagEngineConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagEngineConfig <a name="VertexAiRagEngineConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfig(Construct Scope, string Id, VertexAiRagEngineConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig">VertexAiRagEngineConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig">VertexAiRagEngineConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig">PutRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRagManagedDbConfig` <a name="PutRagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig"></a>

```csharp
private void PutRagManagedDbConfig(VertexAiRagEngineConfigRagManagedDbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiRagEngineConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiRagEngineConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiRagEngineConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiRagEngineConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiRagEngineConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiRagEngineConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiRagEngineConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiRagEngineConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfig">RagManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference">VertexAiRagEngineConfigRagManagedDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference">VertexAiRagEngineConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfigInput">RagManagedDbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RagManagedDbConfig`<sup>Required</sup> <a name="RagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfig"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigOutputReference RagManagedDbConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference">VertexAiRagEngineConfigRagManagedDbConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeouts"></a>

```csharp
public VertexAiRagEngineConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference">VertexAiRagEngineConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RagManagedDbConfigInput`<sup>Optional</sup> <a name="RagManagedDbConfigInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfigInput"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfig RagManagedDbConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagEngineConfigConfig <a name="VertexAiRagEngineConfigConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    VertexAiRagEngineConfigRagManagedDbConfig RagManagedDbConfig,
    string Id = null,
    string Project = null,
    string Region = null,
    VertexAiRagEngineConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.ragManagedDbConfig">RagManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.region">Region</a></code> | <code>string</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RagManagedDbConfig`<sup>Required</sup> <a name="RagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.ragManagedDbConfig"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfig RagManagedDbConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#rag_managed_db_config VertexAiRagEngineConfig#rag_managed_db_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#region VertexAiRagEngineConfig#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.timeouts"></a>

```csharp
public VertexAiRagEngineConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#timeouts VertexAiRagEngineConfig#timeouts}

---

### VertexAiRagEngineConfigRagManagedDbConfig <a name="VertexAiRagEngineConfigRagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigRagManagedDbConfig {
    VertexAiRagEngineConfigRagManagedDbConfigBasic Basic = null,
    VertexAiRagEngineConfigRagManagedDbConfigScaled Scaled = null,
    VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned Unprovisioned = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.scaled">Scaled</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | scaled block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned">Unprovisioned</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | unprovisioned block. |

---

##### `Basic`<sup>Optional</sup> <a name="Basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.basic"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigBasic Basic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#basic VertexAiRagEngineConfig#basic}

---

##### `Scaled`<sup>Optional</sup> <a name="Scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.scaled"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigScaled Scaled { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

scaled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#scaled VertexAiRagEngineConfig#scaled}

---

##### `Unprovisioned`<sup>Optional</sup> <a name="Unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned Unprovisioned { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

unprovisioned block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#unprovisioned VertexAiRagEngineConfig#unprovisioned}

---

### VertexAiRagEngineConfigRagManagedDbConfigBasic <a name="VertexAiRagEngineConfigRagManagedDbConfigBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigRagManagedDbConfigBasic {

};
```


### VertexAiRagEngineConfigRagManagedDbConfigScaled <a name="VertexAiRagEngineConfigRagManagedDbConfigScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigRagManagedDbConfigScaled {

};
```


### VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned <a name="VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned {

};
```


### VertexAiRagEngineConfigTimeouts <a name="VertexAiRagEngineConfigTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigBasic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigRagManagedDbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic">PutBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled">PutScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned">PutUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic">ResetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled">ResetScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned">ResetUnprovisioned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasic` <a name="PutBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic"></a>

```csharp
private void PutBasic(VertexAiRagEngineConfigRagManagedDbConfigBasic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `PutScaled` <a name="PutScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled"></a>

```csharp
private void PutScaled(VertexAiRagEngineConfigRagManagedDbConfigScaled Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `PutUnprovisioned` <a name="PutUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned"></a>

```csharp
private void PutUnprovisioned(VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `ResetBasic` <a name="ResetBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic"></a>

```csharp
private void ResetBasic()
```

##### `ResetScaled` <a name="ResetScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled"></a>

```csharp
private void ResetScaled()
```

##### `ResetUnprovisioned` <a name="ResetUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned"></a>

```csharp
private void ResetUnprovisioned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled">Scaled</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned">Unprovisioned</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput">BasicInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput">ScaledInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput">UnprovisionedInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Basic`<sup>Required</sup> <a name="Basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference Basic { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a>

---

##### `Scaled`<sup>Required</sup> <a name="Scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference Scaled { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a>

---

##### `Unprovisioned`<sup>Required</sup> <a name="Unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference Unprovisioned { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a>

---

##### `BasicInput`<sup>Optional</sup> <a name="BasicInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigBasic BasicInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `ScaledInput`<sup>Optional</sup> <a name="ScaledInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigScaled ScaledInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `UnprovisionedInput`<sup>Optional</sup> <a name="UnprovisionedInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned UnprovisionedInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigScaled InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue"></a>

```csharp
public VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---


### VertexAiRagEngineConfigTimeoutsOutputReference <a name="VertexAiRagEngineConfigTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiRagEngineConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



