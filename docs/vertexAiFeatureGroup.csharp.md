# `vertexAiFeatureGroup` Submodule <a name="`vertexAiFeatureGroup` Submodule" id="@cdktf/provider-google.vertexAiFeatureGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureGroup <a name="VertexAiFeatureGroup" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group google_vertex_ai_feature_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureGroup(Construct Scope, string Id, VertexAiFeatureGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig">VertexAiFeatureGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig">VertexAiFeatureGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putBigQuery">PutBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetBigQuery">ResetBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigQuery` <a name="PutBigQuery" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putBigQuery"></a>

```csharp
private void PutBigQuery(VertexAiFeatureGroupBigQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putBigQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiFeatureGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a>

---

##### `ResetBigQuery` <a name="ResetBigQuery" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetBigQuery"></a>

```csharp
private void ResetBigQuery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiFeatureGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiFeatureGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiFeatureGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiFeatureGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiFeatureGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VertexAiFeatureGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiFeatureGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiFeatureGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.bigQuery">BigQuery</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference">VertexAiFeatureGroupBigQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference">VertexAiFeatureGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.bigQueryInput">BigQueryInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigQuery`<sup>Required</sup> <a name="BigQuery" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.bigQuery"></a>

```csharp
public VertexAiFeatureGroupBigQueryOutputReference BigQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference">VertexAiFeatureGroupBigQueryOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.timeouts"></a>

```csharp
public VertexAiFeatureGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference">VertexAiFeatureGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BigQueryInput`<sup>Optional</sup> <a name="BigQueryInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.bigQueryInput"></a>

```csharp
public VertexAiFeatureGroupBigQuery BigQueryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureGroupBigQuery <a name="VertexAiFeatureGroupBigQuery" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureGroupBigQuery {
    VertexAiFeatureGroupBigQueryBigQuerySource BigQuerySource,
    string[] EntityIdColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.property.bigQuerySource">BigQuerySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a></code> | big_query_source block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.property.entityIdColumns">EntityIdColumns</a></code> | <code>string[]</code> | Columns to construct entityId / row keys. Currently only supports 1 entity_id_column. If not provided defaults to entityId. |

---

##### `BigQuerySource`<sup>Required</sup> <a name="BigQuerySource" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.property.bigQuerySource"></a>

```csharp
public VertexAiFeatureGroupBigQueryBigQuerySource BigQuerySource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a>

big_query_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#big_query_source VertexAiFeatureGroup#big_query_source}

---

##### `EntityIdColumns`<sup>Optional</sup> <a name="EntityIdColumns" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.property.entityIdColumns"></a>

```csharp
public string[] EntityIdColumns { get; set; }
```

- *Type:* string[]

Columns to construct entityId / row keys. Currently only supports 1 entity_id_column. If not provided defaults to entityId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#entity_id_columns VertexAiFeatureGroup#entity_id_columns}

---

### VertexAiFeatureGroupBigQueryBigQuerySource <a name="VertexAiFeatureGroupBigQueryBigQuerySource" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureGroupBigQueryBigQuerySource {
    string InputUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource.property.inputUri">InputUri</a></code> | <code>string</code> | BigQuery URI to a table, up to 2000 characters long. For example: 'bq://projectId.bqDatasetId.bqTableId.'. |

---

##### `InputUri`<sup>Required</sup> <a name="InputUri" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource.property.inputUri"></a>

```csharp
public string InputUri { get; set; }
```

- *Type:* string

BigQuery URI to a table, up to 2000 characters long. For example: 'bq://projectId.bqDatasetId.bqTableId.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#input_uri VertexAiFeatureGroup#input_uri}

---

### VertexAiFeatureGroupConfig <a name="VertexAiFeatureGroupConfig" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    VertexAiFeatureGroupBigQuery BigQuery = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Project = null,
    string Region = null,
    VertexAiFeatureGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.bigQuery">BigQuery</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.description">Description</a></code> | <code>string</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#id VertexAiFeatureGroup#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the Feature Group. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#project VertexAiFeatureGroup#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.region">Region</a></code> | <code>string</code> | The region of feature group. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BigQuery`<sup>Optional</sup> <a name="BigQuery" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.bigQuery"></a>

```csharp
public VertexAiFeatureGroupBigQuery BigQuery { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#big_query VertexAiFeatureGroup#big_query}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#description VertexAiFeatureGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#id VertexAiFeatureGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#labels VertexAiFeatureGroup#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#name VertexAiFeatureGroup#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#project VertexAiFeatureGroup#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of feature group. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#region VertexAiFeatureGroup#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.timeouts"></a>

```csharp
public VertexAiFeatureGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#timeouts VertexAiFeatureGroup#timeouts}

---

### VertexAiFeatureGroupTimeouts <a name="VertexAiFeatureGroupTimeouts" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#create VertexAiFeatureGroup#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#delete VertexAiFeatureGroup#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#update VertexAiFeatureGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#create VertexAiFeatureGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#delete VertexAiFeatureGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/vertex_ai_feature_group#update VertexAiFeatureGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference <a name="VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.inputUriInput">InputUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.inputUri">InputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputUriInput`<sup>Optional</sup> <a name="InputUriInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.inputUriInput"></a>

```csharp
public string InputUriInput { get; }
```

- *Type:* string

---

##### `InputUri`<sup>Required</sup> <a name="InputUri" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.inputUri"></a>

```csharp
public string InputUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureGroupBigQueryBigQuerySource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a>

---


### VertexAiFeatureGroupBigQueryOutputReference <a name="VertexAiFeatureGroupBigQueryOutputReference" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureGroupBigQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.putBigQuerySource">PutBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resetEntityIdColumns">ResetEntityIdColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigQuerySource` <a name="PutBigQuerySource" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.putBigQuerySource"></a>

```csharp
private void PutBigQuerySource(VertexAiFeatureGroupBigQueryBigQuerySource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.putBigQuerySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a>

---

##### `ResetEntityIdColumns` <a name="ResetEntityIdColumns" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resetEntityIdColumns"></a>

```csharp
private void ResetEntityIdColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.bigQuerySource">BigQuerySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference">VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.bigQuerySourceInput">BigQuerySourceInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.entityIdColumnsInput">EntityIdColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.entityIdColumns">EntityIdColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigQuerySource`<sup>Required</sup> <a name="BigQuerySource" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.bigQuerySource"></a>

```csharp
public VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference BigQuerySource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference">VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference</a>

---

##### `BigQuerySourceInput`<sup>Optional</sup> <a name="BigQuerySourceInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.bigQuerySourceInput"></a>

```csharp
public VertexAiFeatureGroupBigQueryBigQuerySource BigQuerySourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a>

---

##### `EntityIdColumnsInput`<sup>Optional</sup> <a name="EntityIdColumnsInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.entityIdColumnsInput"></a>

```csharp
public string[] EntityIdColumnsInput { get; }
```

- *Type:* string[]

---

##### `EntityIdColumns`<sup>Required</sup> <a name="EntityIdColumns" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.entityIdColumns"></a>

```csharp
public string[] EntityIdColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.internalValue"></a>

```csharp
public VertexAiFeatureGroupBigQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a>

---


### VertexAiFeatureGroupTimeoutsOutputReference <a name="VertexAiFeatureGroupTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiFeatureGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



