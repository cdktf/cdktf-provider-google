# `loggingFolderSink` Submodule <a name="`loggingFolderSink` Submodule" id="@cdktf/provider-google.loggingFolderSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingFolderSink <a name="LoggingFolderSink" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink google_logging_folder_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderSink(Construct Scope, string Id, LoggingFolderSinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig">LoggingFolderSinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig">LoggingFolderSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putBigqueryOptions">PutBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetBigqueryOptions">ResetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetIncludeChildren">ResetIncludeChildren</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetInterceptChildren">ResetInterceptChildren</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryOptions` <a name="PutBigqueryOptions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putBigqueryOptions"></a>

```csharp
private void PutBigqueryOptions(LoggingFolderSinkBigqueryOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a>

---

##### `PutExclusions` <a name="PutExclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putExclusions"></a>

```csharp
private void PutExclusions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putExclusions.parameter.value"></a>

- *Type:* object

---

##### `ResetBigqueryOptions` <a name="ResetBigqueryOptions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetBigqueryOptions"></a>

```csharp
private void ResetBigqueryOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeChildren` <a name="ResetIncludeChildren" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetIncludeChildren"></a>

```csharp
private void ResetIncludeChildren()
```

##### `ResetInterceptChildren` <a name="ResetInterceptChildren" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetInterceptChildren"></a>

```csharp
private void ResetInterceptChildren()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoggingFolderSink resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingFolderSink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingFolderSink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingFolderSink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingFolderSink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoggingFolderSink resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingFolderSink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingFolderSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoggingFolderSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference">LoggingFolderSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList">LoggingFolderSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.writerIdentity">WriterIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.bigqueryOptionsInput">BigqueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.exclusionsInput">ExclusionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.includeChildrenInput">IncludeChildrenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.interceptChildrenInput">InterceptChildrenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.includeChildren">IncludeChildren</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.interceptChildren">InterceptChildren</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigqueryOptions`<sup>Required</sup> <a name="BigqueryOptions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.bigqueryOptions"></a>

```csharp
public LoggingFolderSinkBigqueryOptionsOutputReference BigqueryOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference">LoggingFolderSinkBigqueryOptionsOutputReference</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.exclusions"></a>

```csharp
public LoggingFolderSinkExclusionsList Exclusions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList">LoggingFolderSinkExclusionsList</a>

---

##### `WriterIdentity`<sup>Required</sup> <a name="WriterIdentity" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.writerIdentity"></a>

```csharp
public string WriterIdentity { get; }
```

- *Type:* string

---

##### `BigqueryOptionsInput`<sup>Optional</sup> <a name="BigqueryOptionsInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.bigqueryOptionsInput"></a>

```csharp
public LoggingFolderSinkBigqueryOptions BigqueryOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.exclusionsInput"></a>

```csharp
public object ExclusionsInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeChildrenInput`<sup>Optional</sup> <a name="IncludeChildrenInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.includeChildrenInput"></a>

```csharp
public object IncludeChildrenInput { get; }
```

- *Type:* object

---

##### `InterceptChildrenInput`<sup>Optional</sup> <a name="InterceptChildrenInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.interceptChildrenInput"></a>

```csharp
public object InterceptChildrenInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeChildren`<sup>Required</sup> <a name="IncludeChildren" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.includeChildren"></a>

```csharp
public object IncludeChildren { get; }
```

- *Type:* object

---

##### `InterceptChildren`<sup>Required</sup> <a name="InterceptChildren" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.interceptChildren"></a>

```csharp
public object InterceptChildren { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingFolderSinkBigqueryOptions <a name="LoggingFolderSinkBigqueryOptions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderSinkBigqueryOptions {
    object UsePartitionedTables
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>object</code> | Whether to use BigQuery's partition tables. |

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions.property.usePartitionedTables"></a>

```csharp
public object UsePartitionedTables { get; set; }
```

- *Type:* object

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#use_partitioned_tables LoggingFolderSink#use_partitioned_tables}

---

### LoggingFolderSinkConfig <a name="LoggingFolderSinkConfig" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderSinkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Destination,
    string Folder,
    string Name,
    LoggingFolderSinkBigqueryOptions BigqueryOptions = null,
    string Description = null,
    object Disabled = null,
    object Exclusions = null,
    string Filter = null,
    string Id = null,
    object IncludeChildren = null,
    object InterceptChildren = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.destination">Destination</a></code> | <code>string</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.folder">Folder</a></code> | <code>string</code> | The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.name">Name</a></code> | <code>string</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.description">Description</a></code> | <code>string</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.disabled">Disabled</a></code> | <code>object</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.exclusions">Exclusions</a></code> | <code>object</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.filter">Filter</a></code> | <code>string</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#id LoggingFolderSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.includeChildren">IncludeChildren</a></code> | <code>object</code> | Whether or not to include children folders in the sink export. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.interceptChildren">InterceptChildren</a></code> | <code>object</code> | Whether or not to intercept logs from child projects. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#destination LoggingFolderSink#destination}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#folder LoggingFolderSink#folder}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#name LoggingFolderSink#name}

---

##### `BigqueryOptions`<sup>Optional</sup> <a name="BigqueryOptions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.bigqueryOptions"></a>

```csharp
public LoggingFolderSinkBigqueryOptions BigqueryOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#bigquery_options LoggingFolderSink#bigquery_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#description LoggingFolderSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#disabled LoggingFolderSink#disabled}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.exclusions"></a>

```csharp
public object Exclusions { get; set; }
```

- *Type:* object

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#exclusions LoggingFolderSink#exclusions}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#filter LoggingFolderSink#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#id LoggingFolderSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeChildren`<sup>Optional</sup> <a name="IncludeChildren" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.includeChildren"></a>

```csharp
public object IncludeChildren { get; set; }
```

- *Type:* object

Whether or not to include children folders in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided folder are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#include_children LoggingFolderSink#include_children}

---

##### `InterceptChildren`<sup>Optional</sup> <a name="InterceptChildren" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.interceptChildren"></a>

```csharp
public object InterceptChildren { get; set; }
```

- *Type:* object

Whether or not to intercept logs from child projects.

If true, matching logs will not match with sinks in child resources, except _Required sinks. This sink will be visible to child resources when listing sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#intercept_children LoggingFolderSink#intercept_children}

---

### LoggingFolderSinkExclusions <a name="LoggingFolderSinkExclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderSinkExclusions {
    string Filter,
    string Name,
    string Description = null,
    object Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.filter">Filter</a></code> | <code>string</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.name">Name</a></code> | <code>string</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.description">Description</a></code> | <code>string</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.disabled">Disabled</a></code> | <code>object</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#filter LoggingFolderSink#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#name LoggingFolderSink#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#description LoggingFolderSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/logging_folder_sink#disabled LoggingFolderSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingFolderSinkBigqueryOptionsOutputReference <a name="LoggingFolderSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderSinkBigqueryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">UsePartitionedTablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsePartitionedTablesInput`<sup>Optional</sup> <a name="UsePartitionedTablesInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```csharp
public object UsePartitionedTablesInput { get; }
```

- *Type:* object

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```csharp
public object UsePartitionedTables { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```csharp
public LoggingFolderSinkBigqueryOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a>

---


### LoggingFolderSinkExclusionsList <a name="LoggingFolderSinkExclusionsList" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderSinkExclusionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.get"></a>

```csharp
private LoggingFolderSinkExclusionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoggingFolderSinkExclusionsOutputReference <a name="LoggingFolderSinkExclusionsOutputReference" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderSinkExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



