# `dataplexGlossaryCategory` Submodule <a name="`dataplexGlossaryCategory` Submodule" id="@cdktf/provider-google.dataplexGlossaryCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexGlossaryCategory <a name="DataplexGlossaryCategory" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category google_dataplex_glossary_category}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexGlossaryCategory(Construct Scope, string Id, DataplexGlossaryCategoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig">DataplexGlossaryCategoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig">DataplexGlossaryCategoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetCategoryId">ResetCategoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetGlossaryId">ResetGlossaryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.putTimeouts"></a>

```csharp
private void PutTimeouts(DataplexGlossaryCategoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

---

##### `ResetCategoryId` <a name="ResetCategoryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetCategoryId"></a>

```csharp
private void ResetCategoryId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetGlossaryId` <a name="ResetGlossaryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetGlossaryId"></a>

```csharp
private void ResetGlossaryId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataplexGlossaryCategory resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataplexGlossaryCategory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataplexGlossaryCategory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataplexGlossaryCategory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataplexGlossaryCategory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataplexGlossaryCategory resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexGlossaryCategory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexGlossaryCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataplexGlossaryCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference">DataplexGlossaryCategoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryIdInput">CategoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryIdInput">GlossaryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryId">CategoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryId">GlossaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeouts"></a>

```csharp
public DataplexGlossaryCategoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference">DataplexGlossaryCategoryTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CategoryIdInput`<sup>Optional</sup> <a name="CategoryIdInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryIdInput"></a>

```csharp
public string CategoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GlossaryIdInput`<sup>Optional</sup> <a name="GlossaryIdInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryIdInput"></a>

```csharp
public string GlossaryIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CategoryId`<sup>Required</sup> <a name="CategoryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryId"></a>

```csharp
public string CategoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GlossaryId`<sup>Required</sup> <a name="GlossaryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryId"></a>

```csharp
public string GlossaryId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexGlossaryCategoryConfig <a name="DataplexGlossaryCategoryConfig" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexGlossaryCategoryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Parent,
    string CategoryId = null,
    string Description = null,
    string DisplayName = null,
    string GlossaryId = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    DataplexGlossaryCategoryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.location">Location</a></code> | <code>string</code> | The location where the glossary category should reside. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.parent">Parent</a></code> | <code>string</code> | The immediate parent of the GlossaryCategory in the resource-hierarchy. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.categoryId">CategoryId</a></code> | <code>string</code> | The category id for creation. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.description">Description</a></code> | <code>string</code> | The user-mutable description of the GlossaryCategory. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User friendly display name of the GlossaryCategory. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.glossaryId">GlossaryId</a></code> | <code>string</code> | The glossary id for creation. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#id DataplexGlossaryCategory#id}. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels for the GlossaryCategory. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#project DataplexGlossaryCategory#project}. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where the glossary category should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#location DataplexGlossaryCategory#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The immediate parent of the GlossaryCategory in the resource-hierarchy.

It can either be a Glossary or a Category. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/categories/{categoryId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#parent DataplexGlossaryCategory#parent}

---

##### `CategoryId`<sup>Optional</sup> <a name="CategoryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.categoryId"></a>

```csharp
public string CategoryId { get; set; }
```

- *Type:* string

The category id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#category_id DataplexGlossaryCategory#category_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The user-mutable description of the GlossaryCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#description DataplexGlossaryCategory#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User friendly display name of the GlossaryCategory.

This is user-mutable. This will be same as the categoryId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#display_name DataplexGlossaryCategory#display_name}

---

##### `GlossaryId`<sup>Optional</sup> <a name="GlossaryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.glossaryId"></a>

```csharp
public string GlossaryId { get; set; }
```

- *Type:* string

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#glossary_id DataplexGlossaryCategory#glossary_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#id DataplexGlossaryCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels for the GlossaryCategory.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#labels DataplexGlossaryCategory#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#project DataplexGlossaryCategory#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.timeouts"></a>

```csharp
public DataplexGlossaryCategoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#timeouts DataplexGlossaryCategory#timeouts}

---

### DataplexGlossaryCategoryTimeouts <a name="DataplexGlossaryCategoryTimeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexGlossaryCategoryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#create DataplexGlossaryCategory#create}. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#delete DataplexGlossaryCategory#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#update DataplexGlossaryCategory#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#create DataplexGlossaryCategory#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#delete DataplexGlossaryCategory#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dataplex_glossary_category#update DataplexGlossaryCategory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexGlossaryCategoryTimeoutsOutputReference <a name="DataplexGlossaryCategoryTimeoutsOutputReference" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataplexGlossaryCategoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



