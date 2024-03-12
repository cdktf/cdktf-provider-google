# `computeHttpsHealthCheck` Submodule <a name="`computeHttpsHealthCheck` Submodule" id="@cdktf/provider-google.computeHttpsHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeHttpsHealthCheck <a name="ComputeHttpsHealthCheck" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check google_compute_https_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHttpsHealthCheck(Construct Scope, string Id, ComputeHttpsHealthCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig">ComputeHttpsHealthCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig">ComputeHttpsHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetCheckIntervalSec">ResetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeHttpsHealthCheckTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts">ComputeHttpsHealthCheckTimeouts</a>

---

##### `ResetCheckIntervalSec` <a name="ResetCheckIntervalSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetCheckIntervalSec"></a>

```csharp
private void ResetCheckIntervalSec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetRequestPath"></a>

```csharp
private void ResetRequestPath()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetTimeoutSec"></a>

```csharp
private void ResetTimeoutSec()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeHttpsHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeHttpsHealthCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeHttpsHealthCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeHttpsHealthCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeHttpsHealthCheck.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeHttpsHealthCheck resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeHttpsHealthCheck to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeHttpsHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeHttpsHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference">ComputeHttpsHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.checkIntervalSecInput">CheckIntervalSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.requestPathInput">RequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.requestPath">RequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeouts"></a>

```csharp
public ComputeHttpsHealthCheckTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference">ComputeHttpsHealthCheckTimeoutsOutputReference</a>

---

##### `CheckIntervalSecInput`<sup>Optional</sup> <a name="CheckIntervalSecInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.checkIntervalSecInput"></a>

```csharp
public double CheckIntervalSecInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.healthyThresholdInput"></a>

```csharp
public double HealthyThresholdInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.requestPathInput"></a>

```csharp
public string RequestPathInput { get; }
```

- *Type:* string

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutSecInput"></a>

```csharp
public double TimeoutSecInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.unhealthyThresholdInput"></a>

```csharp
public double UnhealthyThresholdInput { get; }
```

- *Type:* double

---

##### `CheckIntervalSec`<sup>Required</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.checkIntervalSec"></a>

```csharp
public double CheckIntervalSec { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.requestPath"></a>

```csharp
public string RequestPath { get; }
```

- *Type:* string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeHttpsHealthCheckConfig <a name="ComputeHttpsHealthCheckConfig" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHttpsHealthCheckConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double CheckIntervalSec = null,
    string Description = null,
    double HealthyThreshold = null,
    string Host = null,
    string Id = null,
    double Port = null,
    string Project = null,
    string RequestPath = null,
    ComputeHttpsHealthCheckTimeouts Timeouts = null,
    double TimeoutSec = null,
    double UnhealthyThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>double</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.host">Host</a></code> | <code>string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#id ComputeHttpsHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.port">Port</a></code> | <code>double</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#project ComputeHttpsHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.requestPath">RequestPath</a></code> | <code>string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts">ComputeHttpsHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#name ComputeHttpsHealthCheck#name}

---

##### `CheckIntervalSec`<sup>Optional</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.checkIntervalSec"></a>

```csharp
public double CheckIntervalSec { get; set; }
```

- *Type:* double

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#check_interval_sec ComputeHttpsHealthCheck#check_interval_sec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#description ComputeHttpsHealthCheck#description}

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; set; }
```

- *Type:* double

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#healthy_threshold ComputeHttpsHealthCheck#healthy_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The value of the host header in the HTTPS health check request.

If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#host ComputeHttpsHealthCheck#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#id ComputeHttpsHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#port ComputeHttpsHealthCheck#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#project ComputeHttpsHealthCheck#project}.

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.requestPath"></a>

```csharp
public string RequestPath { get; set; }
```

- *Type:* string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#request_path ComputeHttpsHealthCheck#request_path}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.timeouts"></a>

```csharp
public ComputeHttpsHealthCheckTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts">ComputeHttpsHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#timeouts ComputeHttpsHealthCheck#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; set; }
```

- *Type:* double

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#timeout_sec ComputeHttpsHealthCheck#timeout_sec}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; set; }
```

- *Type:* double

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#unhealthy_threshold ComputeHttpsHealthCheck#unhealthy_threshold}

---

### ComputeHttpsHealthCheckTimeouts <a name="ComputeHttpsHealthCheckTimeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHttpsHealthCheckTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#create ComputeHttpsHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#delete ComputeHttpsHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#update ComputeHttpsHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#create ComputeHttpsHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#delete ComputeHttpsHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/compute_https_health_check#update ComputeHttpsHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeHttpsHealthCheckTimeoutsOutputReference <a name="ComputeHttpsHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeHttpsHealthCheckTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



