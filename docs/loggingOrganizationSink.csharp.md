# `loggingOrganizationSink` Submodule <a name="`loggingOrganizationSink` Submodule" id="@cdktf/provider-google.loggingOrganizationSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingOrganizationSink <a name="LoggingOrganizationSink" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink google_logging_organization_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingOrganizationSink(Construct Scope, string Id, LoggingOrganizationSinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig">LoggingOrganizationSinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig">LoggingOrganizationSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putBigqueryOptions">PutBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetBigqueryOptions">ResetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetIncludeChildren">ResetIncludeChildren</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetInterceptChildren">ResetInterceptChildren</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryOptions` <a name="PutBigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putBigqueryOptions"></a>

```csharp
private void PutBigqueryOptions(LoggingOrganizationSinkBigqueryOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

---

##### `PutExclusions` <a name="PutExclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putExclusions"></a>

```csharp
private void PutExclusions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putExclusions.parameter.value"></a>

- *Type:* object

---

##### `ResetBigqueryOptions` <a name="ResetBigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetBigqueryOptions"></a>

```csharp
private void ResetBigqueryOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeChildren` <a name="ResetIncludeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetIncludeChildren"></a>

```csharp
private void ResetIncludeChildren()
```

##### `ResetInterceptChildren` <a name="ResetInterceptChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetInterceptChildren"></a>

```csharp
private void ResetInterceptChildren()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoggingOrganizationSink resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingOrganizationSink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingOrganizationSink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingOrganizationSink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingOrganizationSink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoggingOrganizationSink resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingOrganizationSink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingOrganizationSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoggingOrganizationSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference">LoggingOrganizationSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList">LoggingOrganizationSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.writerIdentity">WriterIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptionsInput">BigqueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusionsInput">ExclusionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildrenInput">IncludeChildrenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.interceptChildrenInput">InterceptChildrenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildren">IncludeChildren</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.interceptChildren">InterceptChildren</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigqueryOptions`<sup>Required</sup> <a name="BigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptions"></a>

```csharp
public LoggingOrganizationSinkBigqueryOptionsOutputReference BigqueryOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference">LoggingOrganizationSinkBigqueryOptionsOutputReference</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusions"></a>

```csharp
public LoggingOrganizationSinkExclusionsList Exclusions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList">LoggingOrganizationSinkExclusionsList</a>

---

##### `WriterIdentity`<sup>Required</sup> <a name="WriterIdentity" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.writerIdentity"></a>

```csharp
public string WriterIdentity { get; }
```

- *Type:* string

---

##### `BigqueryOptionsInput`<sup>Optional</sup> <a name="BigqueryOptionsInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptionsInput"></a>

```csharp
public LoggingOrganizationSinkBigqueryOptions BigqueryOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusionsInput"></a>

```csharp
public object ExclusionsInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeChildrenInput`<sup>Optional</sup> <a name="IncludeChildrenInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildrenInput"></a>

```csharp
public object IncludeChildrenInput { get; }
```

- *Type:* object

---

##### `InterceptChildrenInput`<sup>Optional</sup> <a name="InterceptChildrenInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.interceptChildrenInput"></a>

```csharp
public object InterceptChildrenInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeChildren`<sup>Required</sup> <a name="IncludeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildren"></a>

```csharp
public object IncludeChildren { get; }
```

- *Type:* object

---

##### `InterceptChildren`<sup>Required</sup> <a name="InterceptChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.interceptChildren"></a>

```csharp
public object InterceptChildren { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingOrganizationSinkBigqueryOptions <a name="LoggingOrganizationSinkBigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingOrganizationSinkBigqueryOptions {
    object UsePartitionedTables
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>object</code> | Whether to use BigQuery's partition tables. |

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables"></a>

```csharp
public object UsePartitionedTables { get; set; }
```

- *Type:* object

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#use_partitioned_tables LoggingOrganizationSink#use_partitioned_tables}

---

### LoggingOrganizationSinkConfig <a name="LoggingOrganizationSinkConfig" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingOrganizationSinkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Destination,
    string Name,
    string OrgId,
    LoggingOrganizationSinkBigqueryOptions BigqueryOptions = null,
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
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.destination">Destination</a></code> | <code>string</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.name">Name</a></code> | <code>string</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.orgId">OrgId</a></code> | <code>string</code> | The numeric ID of the organization to be exported to the sink. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.description">Description</a></code> | <code>string</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.disabled">Disabled</a></code> | <code>object</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.exclusions">Exclusions</a></code> | <code>object</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.filter">Filter</a></code> | <code>string</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#id LoggingOrganizationSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.includeChildren">IncludeChildren</a></code> | <code>object</code> | Whether or not to include children organizations in the sink export. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.interceptChildren">InterceptChildren</a></code> | <code>object</code> | Whether or not to intercept logs from child projects. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#destination LoggingOrganizationSink#destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#name LoggingOrganizationSink#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The numeric ID of the organization to be exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#org_id LoggingOrganizationSink#org_id}

---

##### `BigqueryOptions`<sup>Optional</sup> <a name="BigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.bigqueryOptions"></a>

```csharp
public LoggingOrganizationSinkBigqueryOptions BigqueryOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#bigquery_options LoggingOrganizationSink#bigquery_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#description LoggingOrganizationSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#disabled LoggingOrganizationSink#disabled}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.exclusions"></a>

```csharp
public object Exclusions { get; set; }
```

- *Type:* object

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#exclusions LoggingOrganizationSink#exclusions}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#filter LoggingOrganizationSink#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#id LoggingOrganizationSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeChildren`<sup>Optional</sup> <a name="IncludeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.includeChildren"></a>

```csharp
public object IncludeChildren { get; set; }
```

- *Type:* object

Whether or not to include children organizations in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#include_children LoggingOrganizationSink#include_children}

---

##### `InterceptChildren`<sup>Optional</sup> <a name="InterceptChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.interceptChildren"></a>

```csharp
public object InterceptChildren { get; set; }
```

- *Type:* object

Whether or not to intercept logs from child projects.

If true, matching logs will not match with sinks in child resources, except _Required sinks. This sink will be visible to child resources when listing sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#intercept_children LoggingOrganizationSink#intercept_children}

---

### LoggingOrganizationSinkExclusions <a name="LoggingOrganizationSinkExclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingOrganizationSinkExclusions {
    string Filter,
    string Name,
    string Description = null,
    object Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.filter">Filter</a></code> | <code>string</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.name">Name</a></code> | <code>string</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.description">Description</a></code> | <code>string</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.disabled">Disabled</a></code> | <code>object</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#filter LoggingOrganizationSink#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#name LoggingOrganizationSink#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#description LoggingOrganizationSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/logging_organization_sink#disabled LoggingOrganizationSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingOrganizationSinkBigqueryOptionsOutputReference <a name="LoggingOrganizationSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingOrganizationSinkBigqueryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">UsePartitionedTablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsePartitionedTablesInput`<sup>Optional</sup> <a name="UsePartitionedTablesInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```csharp
public object UsePartitionedTablesInput { get; }
```

- *Type:* object

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```csharp
public object UsePartitionedTables { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```csharp
public LoggingOrganizationSinkBigqueryOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

---


### LoggingOrganizationSinkExclusionsList <a name="LoggingOrganizationSinkExclusionsList" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingOrganizationSinkExclusionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.get"></a>

```csharp
private LoggingOrganizationSinkExclusionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoggingOrganizationSinkExclusionsOutputReference <a name="LoggingOrganizationSinkExclusionsOutputReference" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingOrganizationSinkExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



