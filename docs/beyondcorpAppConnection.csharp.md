# `beyondcorpAppConnection` Submodule <a name="`beyondcorpAppConnection` Submodule" id="@cdktf/provider-google.beyondcorpAppConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpAppConnection <a name="BeyondcorpAppConnection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection google_beyondcorp_app_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnection(Construct Scope, string Id, BeyondcorpAppConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig">BeyondcorpAppConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig">BeyondcorpAppConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint">PutApplicationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway">PutGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetConnectors">ResetConnectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetGateway">ResetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationEndpoint` <a name="PutApplicationEndpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint"></a>

```csharp
private void PutApplicationEndpoint(BeyondcorpAppConnectionApplicationEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

---

##### `PutGateway` <a name="PutGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway"></a>

```csharp
private void PutGateway(BeyondcorpAppConnectionGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(BeyondcorpAppConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>

---

##### `ResetConnectors` <a name="ResetConnectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetConnectors"></a>

```csharp
private void ResetConnectors()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetGateway` <a name="ResetGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetGateway"></a>

```csharp
private void ResetGateway()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpAppConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpAppConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpAppConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpAppConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpAppConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BeyondcorpAppConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BeyondcorpAppConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BeyondcorpAppConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpAppConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference">BeyondcorpAppConnectionApplicationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference">BeyondcorpAppConnectionGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference">BeyondcorpAppConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpointInput">ApplicationEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectorsInput">ConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gatewayInput">GatewayInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectors">Connectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationEndpoint`<sup>Required</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpoint"></a>

```csharp
public BeyondcorpAppConnectionApplicationEndpointOutputReference ApplicationEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference">BeyondcorpAppConnectionApplicationEndpointOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gateway"></a>

```csharp
public BeyondcorpAppConnectionGatewayOutputReference Gateway { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference">BeyondcorpAppConnectionGatewayOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeouts"></a>

```csharp
public BeyondcorpAppConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference">BeyondcorpAppConnectionTimeoutsOutputReference</a>

---

##### `ApplicationEndpointInput`<sup>Optional</sup> <a name="ApplicationEndpointInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpointInput"></a>

```csharp
public BeyondcorpAppConnectionApplicationEndpoint ApplicationEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

---

##### `ConnectorsInput`<sup>Optional</sup> <a name="ConnectorsInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectorsInput"></a>

```csharp
public string[] ConnectorsInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gatewayInput"></a>

```csharp
public BeyondcorpAppConnectionGateway GatewayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Connectors`<sup>Required</sup> <a name="Connectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectors"></a>

```csharp
public string[] Connectors { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpAppConnectionApplicationEndpoint <a name="BeyondcorpAppConnectionApplicationEndpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectionApplicationEndpoint {
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.host">Host</a></code> | <code>string</code> | Hostname or IP address of the remote application endpoint. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.port">Port</a></code> | <code>double</code> | Port of the remote application endpoint. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Hostname or IP address of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#host BeyondcorpAppConnection#host}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#port BeyondcorpAppConnection#port}

---

### BeyondcorpAppConnectionConfig <a name="BeyondcorpAppConnectionConfig" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    BeyondcorpAppConnectionApplicationEndpoint ApplicationEndpoint,
    string Name,
    string[] Connectors = null,
    string DisplayName = null,
    BeyondcorpAppConnectionGateway Gateway = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string Region = null,
    BeyondcorpAppConnectionTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | application_endpoint block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.name">Name</a></code> | <code>string</code> | ID of the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connectors">Connectors</a></code> | <code>string[]</code> | List of AppConnectors that are authorised to be associated with this AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | An arbitrary user-provided name for the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#id BeyondcorpAppConnection#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#project BeyondcorpAppConnection#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.region">Region</a></code> | <code>string</code> | The region of the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.type">Type</a></code> | <code>string</code> | The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationEndpoint`<sup>Required</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.applicationEndpoint"></a>

```csharp
public BeyondcorpAppConnectionApplicationEndpoint ApplicationEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

application_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#application_endpoint BeyondcorpAppConnection#application_endpoint}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

ID of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#name BeyondcorpAppConnection#name}

---

##### `Connectors`<sup>Optional</sup> <a name="Connectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connectors"></a>

```csharp
public string[] Connectors { get; set; }
```

- *Type:* string[]

List of AppConnectors that are authorised to be associated with this AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#connectors BeyondcorpAppConnection#connectors}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

An arbitrary user-provided name for the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#display_name BeyondcorpAppConnection#display_name}

---

##### `Gateway`<sup>Optional</sup> <a name="Gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.gateway"></a>

```csharp
public BeyondcorpAppConnectionGateway Gateway { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#gateway BeyondcorpAppConnection#gateway}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#id BeyondcorpAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#labels BeyondcorpAppConnection#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#project BeyondcorpAppConnection#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#region BeyondcorpAppConnection#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.timeouts"></a>

```csharp
public BeyondcorpAppConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#timeouts BeyondcorpAppConnection#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}

---

### BeyondcorpAppConnectionGateway <a name="BeyondcorpAppConnectionGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectionGateway {
    string AppGateway,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.appGateway">AppGateway</a></code> | <code>string</code> | AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.type">Type</a></code> | <code>string</code> | The type of hosting used by the gateway. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1 for a list of possible values. |

---

##### `AppGateway`<sup>Required</sup> <a name="AppGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.appGateway"></a>

```csharp
public string AppGateway { get; set; }
```

- *Type:* string

AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#app_gateway BeyondcorpAppConnection#app_gateway}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of hosting used by the gateway. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1 for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}

---

### BeyondcorpAppConnectionTimeouts <a name="BeyondcorpAppConnectionTimeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#create BeyondcorpAppConnection#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#delete BeyondcorpAppConnection#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#update BeyondcorpAppConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#create BeyondcorpAppConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#delete BeyondcorpAppConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connection#update BeyondcorpAppConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpAppConnectionApplicationEndpointOutputReference <a name="BeyondcorpAppConnectionApplicationEndpointOutputReference" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectionApplicationEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue"></a>

```csharp
public BeyondcorpAppConnectionApplicationEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

---


### BeyondcorpAppConnectionGatewayOutputReference <a name="BeyondcorpAppConnectionGatewayOutputReference" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectionGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.ingressPort">IngressPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGatewayInput">AppGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGateway">AppGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressPort`<sup>Required</sup> <a name="IngressPort" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.ingressPort"></a>

```csharp
public double IngressPort { get; }
```

- *Type:* double

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `AppGatewayInput`<sup>Optional</sup> <a name="AppGatewayInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGatewayInput"></a>

```csharp
public string AppGatewayInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AppGateway`<sup>Required</sup> <a name="AppGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGateway"></a>

```csharp
public string AppGateway { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.internalValue"></a>

```csharp
public BeyondcorpAppConnectionGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

---


### BeyondcorpAppConnectionTimeoutsOutputReference <a name="BeyondcorpAppConnectionTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



