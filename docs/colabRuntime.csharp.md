# `colabRuntime` Submodule <a name="`colabRuntime` Submodule" id="@cdktf/provider-google.colabRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabRuntime <a name="ColabRuntime" id="@cdktf/provider-google.colabRuntime.ColabRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime google_colab_runtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntime(Construct Scope, string Id, ColabRuntimeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig">ColabRuntimeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig">ColabRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.putNotebookRuntimeTemplateRef">PutNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetAutoUpgrade">ResetAutoUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetNotebookRuntimeTemplateRef">ResetNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntime.ColabRuntime.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.colabRuntime.ColabRuntime.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.colabRuntime.ColabRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.colabRuntime.ColabRuntime.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.colabRuntime.ColabRuntime.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.colabRuntime.ColabRuntime.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.colabRuntime.ColabRuntime.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.colabRuntime.ColabRuntime.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntime.ColabRuntime.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotebookRuntimeTemplateRef` <a name="PutNotebookRuntimeTemplateRef" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putNotebookRuntimeTemplateRef"></a>

```csharp
private void PutNotebookRuntimeTemplateRef(ColabRuntimeNotebookRuntimeTemplateRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putNotebookRuntimeTemplateRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putTimeouts"></a>

```csharp
private void PutTimeouts(ColabRuntimeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a>

---

##### `ResetAutoUpgrade` <a name="ResetAutoUpgrade" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetAutoUpgrade"></a>

```csharp
private void ResetAutoUpgrade()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetDesiredState"></a>

```csharp
private void ResetDesiredState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNotebookRuntimeTemplateRef` <a name="ResetNotebookRuntimeTemplateRef" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetNotebookRuntimeTemplateRef"></a>

```csharp
private void ResetNotebookRuntimeTemplateRef()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ColabRuntime resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabRuntime.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabRuntime.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabRuntime.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ColabRuntime.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ColabRuntime resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ColabRuntime to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ColabRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ColabRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.isUpgradable">IsUpgradable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeTemplateRef">NotebookRuntimeTemplateRef</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference">ColabRuntimeNotebookRuntimeTemplateRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeType">NotebookRuntimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference">ColabRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.autoUpgradeInput">AutoUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.desiredStateInput">DesiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeTemplateRefInput">NotebookRuntimeTemplateRefInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.runtimeUserInput">RuntimeUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.autoUpgrade">AutoUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.desiredState">DesiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.runtimeUser">RuntimeUser</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `IsUpgradable`<sup>Required</sup> <a name="IsUpgradable" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.isUpgradable"></a>

```csharp
public IResolvable IsUpgradable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NotebookRuntimeTemplateRef`<sup>Required</sup> <a name="NotebookRuntimeTemplateRef" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeTemplateRef"></a>

```csharp
public ColabRuntimeNotebookRuntimeTemplateRefOutputReference NotebookRuntimeTemplateRef { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference">ColabRuntimeNotebookRuntimeTemplateRefOutputReference</a>

---

##### `NotebookRuntimeType`<sup>Required</sup> <a name="NotebookRuntimeType" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeType"></a>

```csharp
public string NotebookRuntimeType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.timeouts"></a>

```csharp
public ColabRuntimeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference">ColabRuntimeTimeoutsOutputReference</a>

---

##### `AutoUpgradeInput`<sup>Optional</sup> <a name="AutoUpgradeInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.autoUpgradeInput"></a>

```csharp
public object AutoUpgradeInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.desiredStateInput"></a>

```csharp
public string DesiredStateInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotebookRuntimeTemplateRefInput`<sup>Optional</sup> <a name="NotebookRuntimeTemplateRefInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeTemplateRefInput"></a>

```csharp
public ColabRuntimeNotebookRuntimeTemplateRef NotebookRuntimeTemplateRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuntimeUserInput`<sup>Optional</sup> <a name="RuntimeUserInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.runtimeUserInput"></a>

```csharp
public string RuntimeUserInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoUpgrade`<sup>Required</sup> <a name="AutoUpgrade" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.autoUpgrade"></a>

```csharp
public object AutoUpgrade { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.desiredState"></a>

```csharp
public string DesiredState { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RuntimeUser`<sup>Required</sup> <a name="RuntimeUser" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.runtimeUser"></a>

```csharp
public string RuntimeUser { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabRuntimeConfig <a name="ColabRuntimeConfig" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    string RuntimeUser,
    object AutoUpgrade = null,
    string Description = null,
    string DesiredState = null,
    string Id = null,
    string Name = null,
    ColabRuntimeNotebookRuntimeTemplateRef NotebookRuntimeTemplateRef = null,
    string Project = null,
    ColabRuntimeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. The display name of the Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.runtimeUser">RuntimeUser</a></code> | <code>string</code> | The user email of the NotebookRuntime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.autoUpgrade">AutoUpgrade</a></code> | <code>object</code> | Triggers an upgrade anytime the runtime is started if it is upgradable. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.description">Description</a></code> | <code>string</code> | The description of the Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.desiredState">DesiredState</a></code> | <code>string</code> | Desired state of the Colab Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#id ColabRuntime#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.notebookRuntimeTemplateRef">NotebookRuntimeTemplateRef</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a></code> | notebook_runtime_template_ref block. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#project ColabRuntime#project}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required. The display name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#display_name ColabRuntime#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#location ColabRuntime#location}

---

##### `RuntimeUser`<sup>Required</sup> <a name="RuntimeUser" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.runtimeUser"></a>

```csharp
public string RuntimeUser { get; set; }
```

- *Type:* string

The user email of the NotebookRuntime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#runtime_user ColabRuntime#runtime_user}

---

##### `AutoUpgrade`<sup>Optional</sup> <a name="AutoUpgrade" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.autoUpgrade"></a>

```csharp
public object AutoUpgrade { get; set; }
```

- *Type:* object

Triggers an upgrade anytime the runtime is started if it is upgradable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#auto_upgrade ColabRuntime#auto_upgrade}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#description ColabRuntime#description}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.desiredState"></a>

```csharp
public string DesiredState { get; set; }
```

- *Type:* string

Desired state of the Colab Runtime.

Set this field to 'RUNNING' to start the runtime, and 'STOPPED' to stop it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#desired_state ColabRuntime#desired_state}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#id ColabRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#name ColabRuntime#name}

---

##### `NotebookRuntimeTemplateRef`<sup>Optional</sup> <a name="NotebookRuntimeTemplateRef" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.notebookRuntimeTemplateRef"></a>

```csharp
public ColabRuntimeNotebookRuntimeTemplateRef NotebookRuntimeTemplateRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a>

notebook_runtime_template_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#notebook_runtime_template_ref ColabRuntime#notebook_runtime_template_ref}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#project ColabRuntime#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.timeouts"></a>

```csharp
public ColabRuntimeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#timeouts ColabRuntime#timeouts}

---

### ColabRuntimeNotebookRuntimeTemplateRef <a name="ColabRuntimeNotebookRuntimeTemplateRef" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeNotebookRuntimeTemplateRef {
    string NotebookRuntimeTemplate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef.property.notebookRuntimeTemplate">NotebookRuntimeTemplate</a></code> | <code>string</code> | The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created. |

---

##### `NotebookRuntimeTemplate`<sup>Required</sup> <a name="NotebookRuntimeTemplate" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef.property.notebookRuntimeTemplate"></a>

```csharp
public string NotebookRuntimeTemplate { get; set; }
```

- *Type:* string

The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#notebook_runtime_template ColabRuntime#notebook_runtime_template}

---

### ColabRuntimeTimeouts <a name="ColabRuntimeTimeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#create ColabRuntime#create}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#delete ColabRuntime#delete}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#update ColabRuntime#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#create ColabRuntime#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#delete ColabRuntime#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_runtime#update ColabRuntime#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabRuntimeNotebookRuntimeTemplateRefOutputReference <a name="ColabRuntimeNotebookRuntimeTemplateRefOutputReference" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeNotebookRuntimeTemplateRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplateInput">NotebookRuntimeTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplate">NotebookRuntimeTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotebookRuntimeTemplateInput`<sup>Optional</sup> <a name="NotebookRuntimeTemplateInput" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplateInput"></a>

```csharp
public string NotebookRuntimeTemplateInput { get; }
```

- *Type:* string

---

##### `NotebookRuntimeTemplate`<sup>Required</sup> <a name="NotebookRuntimeTemplate" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplate"></a>

```csharp
public string NotebookRuntimeTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.internalValue"></a>

```csharp
public ColabRuntimeNotebookRuntimeTemplateRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a>

---


### ColabRuntimeTimeoutsOutputReference <a name="ColabRuntimeTimeoutsOutputReference" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ColabRuntimeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



