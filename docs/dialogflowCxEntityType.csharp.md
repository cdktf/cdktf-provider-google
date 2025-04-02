# `dialogflowCxEntityType` Submodule <a name="`dialogflowCxEntityType` Submodule" id="@cdktf/provider-google.dialogflowCxEntityType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxEntityType <a name="DialogflowCxEntityType" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type google_dialogflow_cx_entity_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityType(Construct Scope, string Id, DialogflowCxEntityTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig">DialogflowCxEntityTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig">DialogflowCxEntityTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putEntities">PutEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putExcludedPhrases">PutExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetAutoExpansionMode">ResetAutoExpansionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetEnableFuzzyExtraction">ResetEnableFuzzyExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetExcludedPhrases">ResetExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetRedact">ResetRedact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntities` <a name="PutEntities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putEntities"></a>

```csharp
private void PutEntities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putEntities.parameter.value"></a>

- *Type:* object

---

##### `PutExcludedPhrases` <a name="PutExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putExcludedPhrases"></a>

```csharp
private void PutExcludedPhrases(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putExcludedPhrases.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowCxEntityTypeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a>

---

##### `ResetAutoExpansionMode` <a name="ResetAutoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetAutoExpansionMode"></a>

```csharp
private void ResetAutoExpansionMode()
```

##### `ResetEnableFuzzyExtraction` <a name="ResetEnableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetEnableFuzzyExtraction"></a>

```csharp
private void ResetEnableFuzzyExtraction()
```

##### `ResetExcludedPhrases` <a name="ResetExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetExcludedPhrases"></a>

```csharp
private void ResetExcludedPhrases()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetLanguageCode"></a>

```csharp
private void ResetLanguageCode()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetRedact` <a name="ResetRedact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetRedact"></a>

```csharp
private void ResetRedact()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxEntityType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxEntityType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxEntityType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxEntityType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxEntityType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DialogflowCxEntityType resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxEntityType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxEntityType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxEntityType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entities">Entities</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList">DialogflowCxEntityTypeEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrases">ExcludedPhrases</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList">DialogflowCxEntityTypeExcludedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference">DialogflowCxEntityTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionModeInput">AutoExpansionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtractionInput">EnableFuzzyExtractionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entitiesInput">EntitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrasesInput">ExcludedPhrasesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redactInput">RedactInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionMode">AutoExpansionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtraction">EnableFuzzyExtraction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redact">Redact</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entities"></a>

```csharp
public DialogflowCxEntityTypeEntitiesList Entities { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList">DialogflowCxEntityTypeEntitiesList</a>

---

##### `ExcludedPhrases`<sup>Required</sup> <a name="ExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrases"></a>

```csharp
public DialogflowCxEntityTypeExcludedPhrasesList ExcludedPhrases { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList">DialogflowCxEntityTypeExcludedPhrasesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeouts"></a>

```csharp
public DialogflowCxEntityTypeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference">DialogflowCxEntityTypeTimeoutsOutputReference</a>

---

##### `AutoExpansionModeInput`<sup>Optional</sup> <a name="AutoExpansionModeInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionModeInput"></a>

```csharp
public string AutoExpansionModeInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableFuzzyExtractionInput`<sup>Optional</sup> <a name="EnableFuzzyExtractionInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtractionInput"></a>

```csharp
public object EnableFuzzyExtractionInput { get; }
```

- *Type:* object

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entitiesInput"></a>

```csharp
public object EntitiesInput { get; }
```

- *Type:* object

---

##### `ExcludedPhrasesInput`<sup>Optional</sup> <a name="ExcludedPhrasesInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrasesInput"></a>

```csharp
public object ExcludedPhrasesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `RedactInput`<sup>Optional</sup> <a name="RedactInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redactInput"></a>

```csharp
public object RedactInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoExpansionMode`<sup>Required</sup> <a name="AutoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionMode"></a>

```csharp
public string AutoExpansionMode { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableFuzzyExtraction`<sup>Required</sup> <a name="EnableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtraction"></a>

```csharp
public object EnableFuzzyExtraction { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Redact`<sup>Required</sup> <a name="Redact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redact"></a>

```csharp
public object Redact { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxEntityTypeConfig <a name="DialogflowCxEntityTypeConfig" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityTypeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    object Entities,
    string Kind,
    string AutoExpansionMode = null,
    object EnableFuzzyExtraction = null,
    object ExcludedPhrases = null,
    string Id = null,
    string LanguageCode = null,
    string Parent = null,
    object Redact = null,
    DialogflowCxEntityTypeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the entity type, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.entities">Entities</a></code> | <code>object</code> | entities block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.kind">Kind</a></code> | <code>string</code> | Indicates whether the entity type can be automatically expanded. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.autoExpansionMode">AutoExpansionMode</a></code> | <code>string</code> | Represents kinds of entities. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.enableFuzzyExtraction">EnableFuzzyExtraction</a></code> | <code>object</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.excludedPhrases">ExcludedPhrases</a></code> | <code>object</code> | excluded_phrases block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#id DialogflowCxEntityType#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.parent">Parent</a></code> | <code>string</code> | The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.redact">Redact</a></code> | <code>object</code> | Indicates whether parameters of the entity type should be redacted in log. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the entity type, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#display_name DialogflowCxEntityType#display_name}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.entities"></a>

```csharp
public object Entities { get; set; }
```

- *Type:* object

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#entities DialogflowCxEntityType#entities}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Indicates whether the entity type can be automatically expanded.

* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#kind DialogflowCxEntityType#kind}

---

##### `AutoExpansionMode`<sup>Optional</sup> <a name="AutoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.autoExpansionMode"></a>

```csharp
public string AutoExpansionMode { get; set; }
```

- *Type:* string

Represents kinds of entities.

* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#auto_expansion_mode DialogflowCxEntityType#auto_expansion_mode}

---

##### `EnableFuzzyExtraction`<sup>Optional</sup> <a name="EnableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.enableFuzzyExtraction"></a>

```csharp
public object EnableFuzzyExtraction { get; set; }
```

- *Type:* object

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#enable_fuzzy_extraction DialogflowCxEntityType#enable_fuzzy_extraction}

---

##### `ExcludedPhrases`<sup>Optional</sup> <a name="ExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.excludedPhrases"></a>

```csharp
public object ExcludedPhrases { get; set; }
```

- *Type:* object

excluded_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#excluded_phrases DialogflowCxEntityType#excluded_phrases}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#id DialogflowCxEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#language_code DialogflowCxEntityType#language_code}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#parent DialogflowCxEntityType#parent}

---

##### `Redact`<sup>Optional</sup> <a name="Redact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.redact"></a>

```csharp
public object Redact { get; set; }
```

- *Type:* object

Indicates whether parameters of the entity type should be redacted in log.

If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#redact DialogflowCxEntityType#redact}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.timeouts"></a>

```csharp
public DialogflowCxEntityTypeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#timeouts DialogflowCxEntityType#timeouts}

---

### DialogflowCxEntityTypeEntities <a name="DialogflowCxEntityTypeEntities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityTypeEntities {
    string[] Synonyms = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.synonyms">Synonyms</a></code> | <code>string[]</code> | A collection of value synonyms. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.value">Value</a></code> | <code>string</code> | The primary value associated with this entity entry. |

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

A collection of value synonyms.

For example, if the entity type is vegetable, and value is scallions, a synonym could be green onions.
For KIND_LIST entity types: This collection must contain exactly one synonym equal to value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#synonyms DialogflowCxEntityType#synonyms}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The primary value associated with this entity entry.

For example, if the entity type is vegetable, the value could be scallions.
For KIND_MAP entity types: A canonical value to be used in place of synonyms.
For KIND_LIST entity types: A string that can contain references to other entity types (with or without aliases).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#value DialogflowCxEntityType#value}

---

### DialogflowCxEntityTypeExcludedPhrases <a name="DialogflowCxEntityTypeExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityTypeExcludedPhrases {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases.property.value">Value</a></code> | <code>string</code> | The word or phrase to be excluded. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The word or phrase to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#value DialogflowCxEntityType#value}

---

### DialogflowCxEntityTypeTimeouts <a name="DialogflowCxEntityTypeTimeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityTypeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#create DialogflowCxEntityType#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#delete DialogflowCxEntityType#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#update DialogflowCxEntityType#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#create DialogflowCxEntityType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#delete DialogflowCxEntityType#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/dialogflow_cx_entity_type#update DialogflowCxEntityType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxEntityTypeEntitiesList <a name="DialogflowCxEntityTypeEntitiesList" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityTypeEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.get"></a>

```csharp
private DialogflowCxEntityTypeEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxEntityTypeEntitiesOutputReference <a name="DialogflowCxEntityTypeEntitiesOutputReference" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityTypeEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxEntityTypeExcludedPhrasesList <a name="DialogflowCxEntityTypeExcludedPhrasesList" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityTypeExcludedPhrasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.get"></a>

```csharp
private DialogflowCxEntityTypeExcludedPhrasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxEntityTypeExcludedPhrasesOutputReference <a name="DialogflowCxEntityTypeExcludedPhrasesOutputReference" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityTypeExcludedPhrasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxEntityTypeTimeoutsOutputReference <a name="DialogflowCxEntityTypeTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxEntityTypeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



