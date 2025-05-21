# `computeRouterRoutePolicy` Submodule <a name="`computeRouterRoutePolicy` Submodule" id="@cdktf/provider-google.computeRouterRoutePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterRoutePolicy <a name="ComputeRouterRoutePolicy" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy google_compute_router_route_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicy(Construct Scope, string Id, ComputeRouterRoutePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig">ComputeRouterRoutePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig">ComputeRouterRoutePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTerms">PutTerms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTerms` <a name="PutTerms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTerms"></a>

```csharp
private void PutTerms(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTerms.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRouterRoutePolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRouterRoutePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRouterRoutePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRouterRoutePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRouterRoutePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRouterRoutePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRouterRoutePolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRouterRoutePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRouterRoutePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRouterRoutePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terms">Terms</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList">ComputeRouterRoutePolicyTermsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference">ComputeRouterRoutePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.routerInput">RouterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.termsInput">TermsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.router">Router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Terms`<sup>Required</sup> <a name="Terms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terms"></a>

```csharp
public ComputeRouterRoutePolicyTermsList Terms { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList">ComputeRouterRoutePolicyTermsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeouts"></a>

```csharp
public ComputeRouterRoutePolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference">ComputeRouterRoutePolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.routerInput"></a>

```csharp
public string RouterInput { get; }
```

- *Type:* string

---

##### `TermsInput`<sup>Optional</sup> <a name="TermsInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.termsInput"></a>

```csharp
public object TermsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.router"></a>

```csharp
public string Router { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterRoutePolicyConfig <a name="ComputeRouterRoutePolicyConfig" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Router,
    object Terms,
    string Id = null,
    string Project = null,
    string Region = null,
    ComputeRouterRoutePolicyTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the route policy. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.router">Router</a></code> | <code>string</code> | The name of the Cloud Router in which this route policy will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.terms">Terms</a></code> | <code>object</code> | terms block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#id ComputeRouterRoutePolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#project ComputeRouterRoutePolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.type">Type</a></code> | <code>string</code> | This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the route policy.

This policy's name, which must be a resource ID segment and unique within all policies owned by the Router

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#name ComputeRouterRoutePolicy#name}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.router"></a>

```csharp
public string Router { get; set; }
```

- *Type:* string

The name of the Cloud Router in which this route policy will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#router ComputeRouterRoutePolicy#router}

---

##### `Terms`<sup>Required</sup> <a name="Terms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.terms"></a>

```csharp
public object Terms { get; set; }
```

- *Type:* object

terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#terms ComputeRouterRoutePolicy#terms}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#id ComputeRouterRoutePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#project ComputeRouterRoutePolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#region ComputeRouterRoutePolicy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.timeouts"></a>

```csharp
public ComputeRouterRoutePolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#timeouts ComputeRouterRoutePolicy#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#type ComputeRouterRoutePolicy#type}

---

### ComputeRouterRoutePolicyTerms <a name="ComputeRouterRoutePolicyTerms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTerms {
    double Priority,
    object Actions = null,
    ComputeRouterRoutePolicyTermsMatch Match = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.priority">Priority</a></code> | <code>double</code> | The evaluation priority for this term, which must be between 0 (inclusive) and 231 (exclusive), and unique within the list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.actions">Actions</a></code> | <code>object</code> | actions block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a></code> | match block. |

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The evaluation priority for this term, which must be between 0 (inclusive) and 231 (exclusive), and unique within the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#priority ComputeRouterRoutePolicy#priority}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.actions"></a>

```csharp
public object Actions { get; set; }
```

- *Type:* object

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#actions ComputeRouterRoutePolicy#actions}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.match"></a>

```csharp
public ComputeRouterRoutePolicyTermsMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#match ComputeRouterRoutePolicy#match}

---

### ComputeRouterRoutePolicyTermsActions <a name="ComputeRouterRoutePolicyTermsActions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTermsActions {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#expression ComputeRouterRoutePolicy#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#description ComputeRouterRoutePolicy#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#location ComputeRouterRoutePolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#title ComputeRouterRoutePolicy#title}

---

### ComputeRouterRoutePolicyTermsMatch <a name="ComputeRouterRoutePolicyTermsMatch" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTermsMatch {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#expression ComputeRouterRoutePolicy#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#description ComputeRouterRoutePolicy#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#location ComputeRouterRoutePolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#title ComputeRouterRoutePolicy#title}

---

### ComputeRouterRoutePolicyTimeouts <a name="ComputeRouterRoutePolicyTimeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#create ComputeRouterRoutePolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#delete ComputeRouterRoutePolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#update ComputeRouterRoutePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#create ComputeRouterRoutePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#delete ComputeRouterRoutePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_router_route_policy#update ComputeRouterRoutePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterRoutePolicyTermsActionsList <a name="ComputeRouterRoutePolicyTermsActionsList" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTermsActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.get"></a>

```csharp
private ComputeRouterRoutePolicyTermsActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRouterRoutePolicyTermsActionsOutputReference <a name="ComputeRouterRoutePolicyTermsActionsOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTermsActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRouterRoutePolicyTermsList <a name="ComputeRouterRoutePolicyTermsList" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTermsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.get"></a>

```csharp
private ComputeRouterRoutePolicyTermsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRouterRoutePolicyTermsMatchOutputReference <a name="ComputeRouterRoutePolicyTermsMatchOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTermsMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.internalValue"></a>

```csharp
public ComputeRouterRoutePolicyTermsMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

---


### ComputeRouterRoutePolicyTermsOutputReference <a name="ComputeRouterRoutePolicyTermsOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTermsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putActions"></a>

```csharp
private void PutActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putActions.parameter.value"></a>

- *Type:* object

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putMatch"></a>

```csharp
private void PutMatch(ComputeRouterRoutePolicyTermsMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList">ComputeRouterRoutePolicyTermsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference">ComputeRouterRoutePolicyTermsMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actions"></a>

```csharp
public ComputeRouterRoutePolicyTermsActionsList Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList">ComputeRouterRoutePolicyTermsActionsList</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.match"></a>

```csharp
public ComputeRouterRoutePolicyTermsMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference">ComputeRouterRoutePolicyTermsMatchOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actionsInput"></a>

```csharp
public object ActionsInput { get; }
```

- *Type:* object

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.matchInput"></a>

```csharp
public ComputeRouterRoutePolicyTermsMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRouterRoutePolicyTimeoutsOutputReference <a name="ComputeRouterRoutePolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRouterRoutePolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



