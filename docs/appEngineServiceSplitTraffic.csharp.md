# `appEngineServiceSplitTraffic` Submodule <a name="`appEngineServiceSplitTraffic` Submodule" id="@cdktf/provider-google.appEngineServiceSplitTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineServiceSplitTraffic <a name="AppEngineServiceSplitTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic google_app_engine_service_split_traffic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceSplitTraffic(Construct Scope, string Id, AppEngineServiceSplitTrafficConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig">AppEngineServiceSplitTrafficConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig">AppEngineServiceSplitTrafficConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit">PutSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic">ResetMigrateTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSplit` <a name="PutSplit" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit"></a>

```csharp
private void PutSplit(AppEngineServiceSplitTrafficSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts"></a>

```csharp
private void PutTimeouts(AppEngineServiceSplitTrafficTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMigrateTraffic` <a name="ResetMigrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic"></a>

```csharp
private void ResetMigrateTraffic()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppEngineServiceSplitTraffic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineServiceSplitTraffic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineServiceSplitTraffic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineServiceSplitTraffic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineServiceSplitTraffic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppEngineServiceSplitTraffic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineServiceSplitTraffic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineServiceSplitTraffic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppEngineServiceSplitTraffic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split">Split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput">MigrateTrafficInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput">SplitInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic">MigrateTraffic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split"></a>

```csharp
public AppEngineServiceSplitTrafficSplitOutputReference Split { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts"></a>

```csharp
public AppEngineServiceSplitTrafficTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MigrateTrafficInput`<sup>Optional</sup> <a name="MigrateTrafficInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput"></a>

```csharp
public object MigrateTrafficInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SplitInput`<sup>Optional</sup> <a name="SplitInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput"></a>

```csharp
public AppEngineServiceSplitTrafficSplit SplitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MigrateTraffic`<sup>Required</sup> <a name="MigrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic"></a>

```csharp
public object MigrateTraffic { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineServiceSplitTrafficConfig <a name="AppEngineServiceSplitTrafficConfig" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceSplitTrafficConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Service,
    AppEngineServiceSplitTrafficSplit Split,
    string Id = null,
    object MigrateTraffic = null,
    string Project = null,
    AppEngineServiceSplitTrafficTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service">Service</a></code> | <code>string</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split">Split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic">MigrateTraffic</a></code> | <code>object</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#service AppEngineServiceSplitTraffic#service}

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split"></a>

```csharp
public AppEngineServiceSplitTrafficSplit Split { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#split AppEngineServiceSplitTraffic#split}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MigrateTraffic`<sup>Optional</sup> <a name="MigrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic"></a>

```csharp
public object MigrateTraffic { get; set; }
```

- *Type:* object

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#migrate_traffic AppEngineServiceSplitTraffic#migrate_traffic}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts"></a>

```csharp
public AppEngineServiceSplitTrafficTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#timeouts AppEngineServiceSplitTraffic#timeouts}

---

### AppEngineServiceSplitTrafficSplit <a name="AppEngineServiceSplitTrafficSplit" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceSplitTrafficSplit {
    System.Collections.Generic.IDictionary<string, string> Allocations,
    string ShardBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations">Allocations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy">ShardBy</a></code> | <code>string</code> | Mechanism used to determine which version a request is sent to. |

---

##### `Allocations`<sup>Required</sup> <a name="Allocations" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Allocations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#allocations AppEngineServiceSplitTraffic#allocations}

---

##### `ShardBy`<sup>Optional</sup> <a name="ShardBy" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy"></a>

```csharp
public string ShardBy { get; set; }
```

- *Type:* string

Mechanism used to determine which version a request is sent to.

The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#shard_by AppEngineServiceSplitTraffic#shard_by}

---

### AppEngineServiceSplitTrafficTimeouts <a name="AppEngineServiceSplitTrafficTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceSplitTrafficTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineServiceSplitTrafficSplitOutputReference <a name="AppEngineServiceSplitTrafficSplitOutputReference" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceSplitTrafficSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy">ResetShardBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShardBy` <a name="ResetShardBy" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy"></a>

```csharp
private void ResetShardBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput">AllocationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput">ShardByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations">Allocations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy">ShardBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationsInput`<sup>Optional</sup> <a name="AllocationsInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AllocationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ShardByInput`<sup>Optional</sup> <a name="ShardByInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput"></a>

```csharp
public string ShardByInput { get; }
```

- *Type:* string

---

##### `Allocations`<sup>Required</sup> <a name="Allocations" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Allocations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ShardBy`<sup>Required</sup> <a name="ShardBy" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy"></a>

```csharp
public string ShardBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue"></a>

```csharp
public AppEngineServiceSplitTrafficSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---


### AppEngineServiceSplitTrafficTimeoutsOutputReference <a name="AppEngineServiceSplitTrafficTimeoutsOutputReference" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceSplitTrafficTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



