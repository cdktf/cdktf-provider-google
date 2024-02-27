# `eventarcTrigger` Submodule <a name="`eventarcTrigger` Submodule" id="@cdktf/provider-google.eventarcTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcTrigger <a name="EventarcTrigger" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger google_eventarc_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTrigger(Construct Scope, string Id, EventarcTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig">EventarcTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig">EventarcTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria">PutMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport">PutTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetEventDataContentType">ResetEventDataContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTransport">ResetTransport</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination"></a>

```csharp
private void PutDestination(EventarcTriggerDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---

##### `PutMatchingCriteria` <a name="PutMatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria"></a>

```csharp
private void PutMatchingCriteria(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts"></a>

```csharp
private void PutTimeouts(EventarcTriggerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

---

##### `PutTransport` <a name="PutTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport"></a>

```csharp
private void PutTransport(EventarcTriggerTransport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetEventDataContentType` <a name="ResetEventDataContentType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetEventDataContentType"></a>

```csharp
private void ResetEventDataContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransport` <a name="ResetTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTransport"></a>

```csharp
private void ResetTransport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventarcTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EventarcTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EventarcTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EventarcTrigger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EventarcTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventarcTrigger resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventarcTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventarcTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventarcTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.conditions">Conditions</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference">EventarcTriggerDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteria">MatchingCriteria</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList">EventarcTriggerMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference">EventarcTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transport">Transport</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference">EventarcTriggerTransportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentTypeInput">EventDataContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteriaInput">MatchingCriteriaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transportInput">TransportInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentType">EventDataContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.conditions"></a>

```csharp
public StringMap Conditions { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destination"></a>

```csharp
public EventarcTriggerDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference">EventarcTriggerDestinationOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `MatchingCriteria`<sup>Required</sup> <a name="MatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteria"></a>

```csharp
public EventarcTriggerMatchingCriteriaList MatchingCriteria { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList">EventarcTriggerMatchingCriteriaList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeouts"></a>

```csharp
public EventarcTriggerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference">EventarcTriggerTimeoutsOutputReference</a>

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transport"></a>

```csharp
public EventarcTriggerTransportOutputReference Transport { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference">EventarcTriggerTransportOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destinationInput"></a>

```csharp
public EventarcTriggerDestination DestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---

##### `EventDataContentTypeInput`<sup>Optional</sup> <a name="EventDataContentTypeInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentTypeInput"></a>

```csharp
public string EventDataContentTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MatchingCriteriaInput`<sup>Optional</sup> <a name="MatchingCriteriaInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteriaInput"></a>

```csharp
public object MatchingCriteriaInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transportInput"></a>

```csharp
public EventarcTriggerTransport TransportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `EventDataContentType`<sup>Required</sup> <a name="EventDataContentType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentType"></a>

```csharp
public string EventDataContentType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcTriggerConfig <a name="EventarcTriggerConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    EventarcTriggerDestination Destination,
    string Location,
    object MatchingCriteria,
    string Name,
    string Channel = null,
    string EventDataContentType = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string ServiceAccount = null,
    EventarcTriggerTimeouts Timeouts = null,
    EventarcTriggerTransport Transport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.matchingCriteria">MatchingCriteria</a></code> | <code>object</code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.name">Name</a></code> | <code>string</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.channel">Channel</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.eventDataContentType">EventDataContentType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.transport">Transport</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | transport block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.destination"></a>

```csharp
public EventarcTriggerDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#destination EventarcTrigger#destination}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

##### `MatchingCriteria`<sup>Required</sup> <a name="MatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.matchingCriteria"></a>

```csharp
public object MatchingCriteria { get; set; }
```

- *Type:* object

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#matching_criteria EventarcTrigger#matching_criteria}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#name EventarcTrigger#name}

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Optional.

The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#channel EventarcTrigger#channel}

---

##### `EventDataContentType`<sup>Optional</sup> <a name="EventDataContentType" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.eventDataContentType"></a>

```csharp
public string EventDataContentType { get; set; }
```

- *Type:* string

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#event_data_content_type EventarcTrigger#event_data_content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#labels EventarcTrigger#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#project EventarcTrigger#project}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#service_account EventarcTrigger#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.timeouts"></a>

```csharp
public EventarcTriggerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#timeouts EventarcTrigger#timeouts}

---

##### `Transport`<sup>Optional</sup> <a name="Transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.transport"></a>

```csharp
public EventarcTriggerTransport Transport { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#transport EventarcTrigger#transport}

---

### EventarcTriggerDestination <a name="EventarcTriggerDestination" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestination {
    EventarcTriggerDestinationCloudRunService CloudRunService = null,
    EventarcTriggerDestinationGke Gke = null,
    EventarcTriggerDestinationHttpEndpoint HttpEndpoint = null,
    EventarcTriggerDestinationNetworkConfig NetworkConfig = null,
    string Workflow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudRunService">CloudRunService</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | cloud_run_service block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.workflow">Workflow</a></code> | <code>string</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `CloudRunService`<sup>Optional</sup> <a name="CloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudRunService"></a>

```csharp
public EventarcTriggerDestinationCloudRunService CloudRunService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#cloud_run_service EventarcTrigger#cloud_run_service}

---

##### `Gke`<sup>Optional</sup> <a name="Gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.gke"></a>

```csharp
public EventarcTriggerDestinationGke Gke { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#gke EventarcTrigger#gke}

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.httpEndpoint"></a>

```csharp
public EventarcTriggerDestinationHttpEndpoint HttpEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#http_endpoint EventarcTrigger#http_endpoint}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.networkConfig"></a>

```csharp
public EventarcTriggerDestinationNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#network_config EventarcTrigger#network_config}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.workflow"></a>

```csharp
public string Workflow { get; set; }
```

- *Type:* string

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#workflow EventarcTrigger#workflow}

---

### EventarcTriggerDestinationCloudRunService <a name="EventarcTriggerDestinationCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestinationCloudRunService {
    string Service,
    string Path = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.service">Service</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.path">Path</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.region">Region</a></code> | <code>string</code> | Required. The region the Cloud Run service is deployed in. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#region EventarcTrigger#region}

---

### EventarcTriggerDestinationGke <a name="EventarcTriggerDestinationGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestinationGke {
    string Cluster,
    string Location,
    string Namespace,
    string Service,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.cluster">Cluster</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.location">Location</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.namespace">Namespace</a></code> | <code>string</code> | Required. The namespace the GKE service is running in. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.service">Service</a></code> | <code>string</code> | Required. Name of the GKE service. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.path">Path</a></code> | <code>string</code> | Optional. |

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#cluster EventarcTrigger#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#namespace EventarcTrigger#namespace}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

### EventarcTriggerDestinationHttpEndpoint <a name="EventarcTriggerDestinationHttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestinationHttpEndpoint {
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint.property.uri">Uri</a></code> | <code>string</code> | Required. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Required.

The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#uri EventarcTrigger#uri}

---

### EventarcTriggerDestinationNetworkConfig <a name="EventarcTriggerDestinationNetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestinationNetworkConfig {
    string NetworkAttachment
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`. |

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#network_attachment EventarcTrigger#network_attachment}

---

### EventarcTriggerMatchingCriteria <a name="EventarcTriggerMatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerMatchingCriteria {
    string Attribute,
    string Value,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.attribute">Attribute</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.value">Value</a></code> | <code>string</code> | Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.operator">Operator</a></code> | <code>string</code> | Optional. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Required.

The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#attribute EventarcTrigger#attribute}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#value EventarcTrigger#value}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Optional.

The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#operator EventarcTrigger#operator}

---

### EventarcTriggerTimeouts <a name="EventarcTriggerTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#create EventarcTrigger#create}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#delete EventarcTrigger#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#update EventarcTrigger#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#create EventarcTrigger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#delete EventarcTrigger#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#update EventarcTrigger#update}.

---

### EventarcTriggerTransport <a name="EventarcTriggerTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerTransport {
    EventarcTriggerTransportPubsub Pubsub = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.property.pubsub">Pubsub</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | pubsub block. |

---

##### `Pubsub`<sup>Optional</sup> <a name="Pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.property.pubsub"></a>

```csharp
public EventarcTriggerTransportPubsub Pubsub { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#pubsub EventarcTrigger#pubsub}

---

### EventarcTriggerTransportPubsub <a name="EventarcTriggerTransportPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerTransportPubsub {
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.property.topic">Topic</a></code> | <code>string</code> | Optional. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/eventarc_trigger#topic EventarcTrigger#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcTriggerDestinationCloudRunServiceOutputReference <a name="EventarcTriggerDestinationCloudRunServiceOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestinationCloudRunServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue"></a>

```csharp
public EventarcTriggerDestinationCloudRunService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---


### EventarcTriggerDestinationGkeOutputReference <a name="EventarcTriggerDestinationGkeOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestinationGkeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.internalValue"></a>

```csharp
public EventarcTriggerDestinationGke InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---


### EventarcTriggerDestinationHttpEndpointOutputReference <a name="EventarcTriggerDestinationHttpEndpointOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestinationHttpEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue"></a>

```csharp
public EventarcTriggerDestinationHttpEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

---


### EventarcTriggerDestinationNetworkConfigOutputReference <a name="EventarcTriggerDestinationNetworkConfigOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestinationNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public EventarcTriggerDestinationNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

---


### EventarcTriggerDestinationOutputReference <a name="EventarcTriggerDestinationOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService">PutCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke">PutGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putHttpEndpoint">PutHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudRunService">ResetCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetGke">ResetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudRunService` <a name="PutCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService"></a>

```csharp
private void PutCloudRunService(EventarcTriggerDestinationCloudRunService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---

##### `PutGke` <a name="PutGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke"></a>

```csharp
private void PutGke(EventarcTriggerDestinationGke Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---

##### `PutHttpEndpoint` <a name="PutHttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putHttpEndpoint"></a>

```csharp
private void PutHttpEndpoint(EventarcTriggerDestinationHttpEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putHttpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(EventarcTriggerDestinationNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

---

##### `ResetCloudRunService` <a name="ResetCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudRunService"></a>

```csharp
private void ResetCloudRunService()
```

##### `ResetGke` <a name="ResetGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetGke"></a>

```csharp
private void ResetGke()
```

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetHttpEndpoint"></a>

```csharp
private void ResetHttpEndpoint()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetWorkflow"></a>

```csharp
private void ResetWorkflow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunction">CloudFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunService">CloudRunService</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference">EventarcTriggerDestinationCloudRunServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference">EventarcTriggerDestinationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference">EventarcTriggerDestinationHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference">EventarcTriggerDestinationNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunServiceInput">CloudRunServiceInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gkeInput">GkeInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflow">Workflow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunction"></a>

```csharp
public string CloudFunction { get; }
```

- *Type:* string

---

##### `CloudRunService`<sup>Required</sup> <a name="CloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunService"></a>

```csharp
public EventarcTriggerDestinationCloudRunServiceOutputReference CloudRunService { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference">EventarcTriggerDestinationCloudRunServiceOutputReference</a>

---

##### `Gke`<sup>Required</sup> <a name="Gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gke"></a>

```csharp
public EventarcTriggerDestinationGkeOutputReference Gke { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference">EventarcTriggerDestinationGkeOutputReference</a>

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpoint"></a>

```csharp
public EventarcTriggerDestinationHttpEndpointOutputReference HttpEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference">EventarcTriggerDestinationHttpEndpointOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfig"></a>

```csharp
public EventarcTriggerDestinationNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference">EventarcTriggerDestinationNetworkConfigOutputReference</a>

---

##### `CloudRunServiceInput`<sup>Optional</sup> <a name="CloudRunServiceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunServiceInput"></a>

```csharp
public EventarcTriggerDestinationCloudRunService CloudRunServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---

##### `GkeInput`<sup>Optional</sup> <a name="GkeInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gkeInput"></a>

```csharp
public EventarcTriggerDestinationGke GkeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpointInput"></a>

```csharp
public EventarcTriggerDestinationHttpEndpoint HttpEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfigInput"></a>

```csharp
public EventarcTriggerDestinationNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflowInput"></a>

```csharp
public string WorkflowInput { get; }
```

- *Type:* string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflow"></a>

```csharp
public string Workflow { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.internalValue"></a>

```csharp
public EventarcTriggerDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---


### EventarcTriggerMatchingCriteriaList <a name="EventarcTriggerMatchingCriteriaList" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerMatchingCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get"></a>

```csharp
private EventarcTriggerMatchingCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventarcTriggerMatchingCriteriaOutputReference <a name="EventarcTriggerMatchingCriteriaOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerMatchingCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventarcTriggerTimeoutsOutputReference <a name="EventarcTriggerTimeoutsOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventarcTriggerTransportOutputReference <a name="EventarcTriggerTransportOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerTransportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub">PutPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resetPubsub">ResetPubsub</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsub` <a name="PutPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub"></a>

```csharp
private void PutPubsub(EventarcTriggerTransportPubsub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---

##### `ResetPubsub` <a name="ResetPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resetPubsub"></a>

```csharp
private void ResetPubsub()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsub">Pubsub</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference">EventarcTriggerTransportPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsubInput">PubsubInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pubsub`<sup>Required</sup> <a name="Pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsub"></a>

```csharp
public EventarcTriggerTransportPubsubOutputReference Pubsub { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference">EventarcTriggerTransportPubsubOutputReference</a>

---

##### `PubsubInput`<sup>Optional</sup> <a name="PubsubInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsubInput"></a>

```csharp
public EventarcTriggerTransportPubsub PubsubInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.internalValue"></a>

```csharp
public EventarcTriggerTransport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---


### EventarcTriggerTransportPubsubOutputReference <a name="EventarcTriggerTransportPubsubOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcTriggerTransportPubsubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.subscription">Subscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.subscription"></a>

```csharp
public string Subscription { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.internalValue"></a>

```csharp
public EventarcTriggerTransportPubsub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---



