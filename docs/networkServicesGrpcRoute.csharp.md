# `networkServicesGrpcRoute` Submodule <a name="`networkServicesGrpcRoute` Submodule" id="@cdktf/provider-google.networkServicesGrpcRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesGrpcRoute <a name="NetworkServicesGrpcRoute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route google_network_services_grpc_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRoute(Construct Scope, string Id, NetworkServicesGrpcRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig">NetworkServicesGrpcRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig">NetworkServicesGrpcRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetGateways">ResetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetMeshes">ResetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkServicesGrpcRouteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGateways` <a name="ResetGateways" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetGateways"></a>

```csharp
private void ResetGateways()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMeshes` <a name="ResetMeshes" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetMeshes"></a>

```csharp
private void ResetMeshes()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesGrpcRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesGrpcRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesGrpcRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesGrpcRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesGrpcRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesGrpcRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesGrpcRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList">NetworkServicesGrpcRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference">NetworkServicesGrpcRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gatewaysInput">GatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnamesInput">HostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshesInput">MeshesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gateways">Gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnames">Hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshes">Meshes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rules"></a>

```csharp
public NetworkServicesGrpcRouteRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList">NetworkServicesGrpcRouteRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeouts"></a>

```csharp
public NetworkServicesGrpcRouteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference">NetworkServicesGrpcRouteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GatewaysInput`<sup>Optional</sup> <a name="GatewaysInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gatewaysInput"></a>

```csharp
public string[] GatewaysInput { get; }
```

- *Type:* string[]

---

##### `HostnamesInput`<sup>Optional</sup> <a name="HostnamesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnamesInput"></a>

```csharp
public string[] HostnamesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MeshesInput`<sup>Optional</sup> <a name="MeshesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshesInput"></a>

```csharp
public string[] MeshesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Gateways`<sup>Required</sup> <a name="Gateways" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gateways"></a>

```csharp
public string[] Gateways { get; }
```

- *Type:* string[]

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnames"></a>

```csharp
public string[] Hostnames { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Meshes`<sup>Required</sup> <a name="Meshes" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshes"></a>

```csharp
public string[] Meshes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesGrpcRouteConfig <a name="NetworkServicesGrpcRouteConfig" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Hostnames,
    string Name,
    object Rules,
    string Description = null,
    string[] Gateways = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string[] Meshes = null,
    string Project = null,
    NetworkServicesGrpcRouteTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.hostnames">Hostnames</a></code> | <code>string[]</code> | Required. Service hostnames with an optional port for which this route describes traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.name">Name</a></code> | <code>string</code> | Name of the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.gateways">Gateways</a></code> | <code>string[]</code> | List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#id NetworkServicesGrpcRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.location">Location</a></code> | <code>string</code> | Location (region) of the GRPCRoute resource to be created. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.meshes">Meshes</a></code> | <code>string[]</code> | List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#project NetworkServicesGrpcRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.hostnames"></a>

```csharp
public string[] Hostnames { get; set; }
```

- *Type:* string[]

Required. Service hostnames with an optional port for which this route describes traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#hostnames NetworkServicesGrpcRoute#hostnames}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the GrpcRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#name NetworkServicesGrpcRoute#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#rules NetworkServicesGrpcRoute#rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#description NetworkServicesGrpcRoute#description}

---

##### `Gateways`<sup>Optional</sup> <a name="Gateways" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.gateways"></a>

```csharp
public string[] Gateways { get; set; }
```

- *Type:* string[]

List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#gateways NetworkServicesGrpcRoute#gateways}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#id NetworkServicesGrpcRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the GrpcRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#labels NetworkServicesGrpcRoute#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location (region) of the GRPCRoute resource to be created.

Only the value 'global' is currently allowed; defaults to 'global' if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#location NetworkServicesGrpcRoute#location}

---

##### `Meshes`<sup>Optional</sup> <a name="Meshes" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.meshes"></a>

```csharp
public string[] Meshes { get; set; }
```

- *Type:* string[]

List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#meshes NetworkServicesGrpcRoute#meshes}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#project NetworkServicesGrpcRoute#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.timeouts"></a>

```csharp
public NetworkServicesGrpcRouteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#timeouts NetworkServicesGrpcRoute#timeouts}

---

### NetworkServicesGrpcRouteRules <a name="NetworkServicesGrpcRouteRules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRules {
    NetworkServicesGrpcRouteRulesAction Action = null,
    object Matches = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.matches">Matches</a></code> | <code>object</code> | matches block. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.action"></a>

```csharp
public NetworkServicesGrpcRouteRulesAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#action NetworkServicesGrpcRoute#action}

---

##### `Matches`<sup>Optional</sup> <a name="Matches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.matches"></a>

```csharp
public object Matches { get; set; }
```

- *Type:* object

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#matches NetworkServicesGrpcRoute#matches}

---

### NetworkServicesGrpcRouteRulesAction <a name="NetworkServicesGrpcRouteRulesAction" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesAction {
    object Destinations = null,
    NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy FaultInjectionPolicy = null,
    NetworkServicesGrpcRouteRulesActionRetryPolicy RetryPolicy = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.destinations">Destinations</a></code> | <code>object</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy">FaultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.timeout">Timeout</a></code> | <code>string</code> | Specifies the timeout for selected route. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.destinations"></a>

```csharp
public object Destinations { get; set; }
```

- *Type:* object

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#destinations NetworkServicesGrpcRoute#destinations}

---

##### `FaultInjectionPolicy`<sup>Optional</sup> <a name="FaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy FaultInjectionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#fault_injection_policy NetworkServicesGrpcRoute#fault_injection_policy}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.retryPolicy"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#retry_policy NetworkServicesGrpcRoute#retry_policy}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#timeout NetworkServicesGrpcRoute#timeout}

---

### NetworkServicesGrpcRouteRulesActionDestinations <a name="NetworkServicesGrpcRouteRulesActionDestinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionDestinations {
    string ServiceName = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.serviceName">ServiceName</a></code> | <code>string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.weight">Weight</a></code> | <code>double</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#service_name NetworkServicesGrpcRoute#service_name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#weight NetworkServicesGrpcRoute#weight}

---

### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy {
    NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort Abort = null,
    NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay Delay = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort">Abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay">Delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `Abort`<sup>Optional</sup> <a name="Abort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort Abort { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#abort NetworkServicesGrpcRoute#abort}

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay Delay { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#delay NetworkServicesGrpcRoute#delay}

---

### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort {
    double HttpStatus = null,
    double Percentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">HttpStatus</a></code> | <code>double</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage">Percentage</a></code> | <code>double</code> | The percentage of traffic which will be aborted. |

---

##### `HttpStatus`<sup>Optional</sup> <a name="HttpStatus" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```csharp
public double HttpStatus { get; set; }
```

- *Type:* double

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#http_status NetworkServicesGrpcRoute#http_status}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#percentage NetworkServicesGrpcRoute#percentage}

---

### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay {
    string FixedDelay = null,
    double Percentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">FixedDelay</a></code> | <code>string</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage">Percentage</a></code> | <code>double</code> | The percentage of traffic on which delay will be injected. |

---

##### `FixedDelay`<sup>Optional</sup> <a name="FixedDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```csharp
public string FixedDelay { get; set; }
```

- *Type:* string

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#fixed_delay NetworkServicesGrpcRoute#fixed_delay}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#percentage NetworkServicesGrpcRoute#percentage}

---

### NetworkServicesGrpcRouteRulesActionRetryPolicy <a name="NetworkServicesGrpcRouteRulesActionRetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionRetryPolicy {
    double NumRetries = null,
    string[] RetryConditions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries">NumRetries</a></code> | <code>double</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions">RetryConditions</a></code> | <code>string[]</code> | Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"]. |

---

##### `NumRetries`<sup>Optional</sup> <a name="NumRetries" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries"></a>

```csharp
public double NumRetries { get; set; }
```

- *Type:* double

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#num_retries NetworkServicesGrpcRoute#num_retries}

---

##### `RetryConditions`<sup>Optional</sup> <a name="RetryConditions" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions"></a>

```csharp
public string[] RetryConditions { get; set; }
```

- *Type:* string[]

Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#retry_conditions NetworkServicesGrpcRoute#retry_conditions}

---

### NetworkServicesGrpcRouteRulesMatches <a name="NetworkServicesGrpcRouteRulesMatches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesMatches {
    object Headers = null,
    NetworkServicesGrpcRouteRulesMatchesMethod Method = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.method">Method</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a></code> | method block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#headers NetworkServicesGrpcRoute#headers}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.method"></a>

```csharp
public NetworkServicesGrpcRouteRulesMatchesMethod Method { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#method NetworkServicesGrpcRoute#method}

---

### NetworkServicesGrpcRouteRulesMatchesHeaders <a name="NetworkServicesGrpcRouteRulesMatchesHeaders" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesMatchesHeaders {
    string Key,
    string Value,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.key">Key</a></code> | <code>string</code> | Required. The key of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.value">Value</a></code> | <code>string</code> | Required. The value of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.type">Type</a></code> | <code>string</code> | The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Required. The key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#key NetworkServicesGrpcRoute#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Required. The value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#value NetworkServicesGrpcRoute#value}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#type NetworkServicesGrpcRoute#type}

---

### NetworkServicesGrpcRouteRulesMatchesMethod <a name="NetworkServicesGrpcRouteRulesMatchesMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesMatchesMethod {
    string GrpcMethod,
    string GrpcService,
    object CaseSensitive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod">GrpcMethod</a></code> | <code>string</code> | Required. Name of the method to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService">GrpcService</a></code> | <code>string</code> | Required. Name of the service to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive">CaseSensitive</a></code> | <code>object</code> | Specifies that matches are case sensitive. The default value is true. |

---

##### `GrpcMethod`<sup>Required</sup> <a name="GrpcMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod"></a>

```csharp
public string GrpcMethod { get; set; }
```

- *Type:* string

Required. Name of the method to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#grpc_method NetworkServicesGrpcRoute#grpc_method}

---

##### `GrpcService`<sup>Required</sup> <a name="GrpcService" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService"></a>

```csharp
public string GrpcService { get; set; }
```

- *Type:* string

Required. Name of the service to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#grpc_service NetworkServicesGrpcRoute#grpc_service}

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive"></a>

```csharp
public object CaseSensitive { get; set; }
```

- *Type:* object

Specifies that matches are case sensitive. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#case_sensitive NetworkServicesGrpcRoute#case_sensitive}

---

### NetworkServicesGrpcRouteTimeouts <a name="NetworkServicesGrpcRouteTimeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#create NetworkServicesGrpcRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#delete NetworkServicesGrpcRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#update NetworkServicesGrpcRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#create NetworkServicesGrpcRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#delete NetworkServicesGrpcRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_services_grpc_route#update NetworkServicesGrpcRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesGrpcRouteRulesActionDestinationsList <a name="NetworkServicesGrpcRouteRulesActionDestinationsList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.get"></a>

```csharp
private NetworkServicesGrpcRouteRulesActionDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesGrpcRouteRulesActionDestinationsOutputReference <a name="NetworkServicesGrpcRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">ResetHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpStatus` <a name="ResetHttpStatus" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```csharp
private void ResetHttpStatus()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">HttpStatusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">HttpStatus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpStatusInput`<sup>Optional</sup> <a name="HttpStatusInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```csharp
public double HttpStatusInput { get; }
```

- *Type:* double

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `HttpStatus`<sup>Required</sup> <a name="HttpStatus" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```csharp
public double HttpStatus { get; }
```

- *Type:* double

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---


### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">ResetFixedDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixedDelay` <a name="ResetFixedDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```csharp
private void ResetFixedDelay()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">FixedDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">FixedDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedDelayInput`<sup>Optional</sup> <a name="FixedDelayInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```csharp
public string FixedDelayInput { get; }
```

- *Type:* string

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `FixedDelay`<sup>Required</sup> <a name="FixedDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```csharp
public string FixedDelay { get; }
```

- *Type:* string

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---


### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">PutAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">PutDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">ResetAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbort` <a name="PutAbort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```csharp
private void PutAbort(NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `PutDelay` <a name="PutDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```csharp
private void PutDelay(NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `ResetAbort` <a name="ResetAbort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```csharp
private void ResetAbort()
```

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```csharp
private void ResetDelay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">Abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">Delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">AbortInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">DelayInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Abort`<sup>Required</sup> <a name="Abort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference Abort { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference Delay { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `AbortInput`<sup>Optional</sup> <a name="AbortInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort AbortInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay DelayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---


### NetworkServicesGrpcRouteRulesActionOutputReference <a name="NetworkServicesGrpcRouteRulesActionOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy">PutFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy">ResetFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* object

---

##### `PutFaultInjectionPolicy` <a name="PutFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```csharp
private void PutFaultInjectionPolicy(NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(NetworkServicesGrpcRouteRulesActionRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetFaultInjectionPolicy` <a name="ResetFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```csharp
private void ResetFaultInjectionPolicy()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList">NetworkServicesGrpcRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy">FaultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput">FaultInjectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinations"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList">NetworkServicesGrpcRouteRulesActionDestinationsList</a>

---

##### `FaultInjectionPolicy`<sup>Required</sup> <a name="FaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference FaultInjectionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput"></a>

```csharp
public object DestinationsInput { get; }
```

- *Type:* object

---

##### `FaultInjectionPolicyInput`<sup>Optional</sup> <a name="FaultInjectionPolicyInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy FaultInjectionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesGrpcRouteRulesAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

---


### NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference <a name="NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries">ResetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">ResetRetryConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumRetries` <a name="ResetNumRetries" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```csharp
private void ResetNumRetries()
```

##### `ResetRetryConditions` <a name="ResetRetryConditions" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```csharp
private void ResetRetryConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">NumRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">RetryConditionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries">NumRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions">RetryConditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumRetriesInput`<sup>Optional</sup> <a name="NumRetriesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```csharp
public double NumRetriesInput { get; }
```

- *Type:* double

---

##### `RetryConditionsInput`<sup>Optional</sup> <a name="RetryConditionsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```csharp
public string[] RetryConditionsInput { get; }
```

- *Type:* string[]

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```csharp
public double NumRetries { get; }
```

- *Type:* double

---

##### `RetryConditions`<sup>Required</sup> <a name="RetryConditions" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```csharp
public string[] RetryConditions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---


### NetworkServicesGrpcRouteRulesList <a name="NetworkServicesGrpcRouteRulesList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.get"></a>

```csharp
private NetworkServicesGrpcRouteRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesGrpcRouteRulesMatchesHeadersList <a name="NetworkServicesGrpcRouteRulesMatchesHeadersList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesMatchesHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.get"></a>

```csharp
private NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference <a name="NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesGrpcRouteRulesMatchesList <a name="NetworkServicesGrpcRouteRulesMatchesList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesMatchesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.get"></a>

```csharp
private NetworkServicesGrpcRouteRulesMatchesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesGrpcRouteRulesMatchesMethodOutputReference <a name="NetworkServicesGrpcRouteRulesMatchesMethodOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesMatchesMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive"></a>

```csharp
private void ResetCaseSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput">GrpcMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput">GrpcServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod">GrpcMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService">GrpcService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput"></a>

```csharp
public object CaseSensitiveInput { get; }
```

- *Type:* object

---

##### `GrpcMethodInput`<sup>Optional</sup> <a name="GrpcMethodInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput"></a>

```csharp
public string GrpcMethodInput { get; }
```

- *Type:* string

---

##### `GrpcServiceInput`<sup>Optional</sup> <a name="GrpcServiceInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput"></a>

```csharp
public string GrpcServiceInput { get; }
```

- *Type:* string

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive"></a>

```csharp
public object CaseSensitive { get; }
```

- *Type:* object

---

##### `GrpcMethod`<sup>Required</sup> <a name="GrpcMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod"></a>

```csharp
public string GrpcMethod { get; }
```

- *Type:* string

---

##### `GrpcService`<sup>Required</sup> <a name="GrpcService" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService"></a>

```csharp
public string GrpcService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesGrpcRouteRulesMatchesMethod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

---


### NetworkServicesGrpcRouteRulesMatchesOutputReference <a name="NetworkServicesGrpcRouteRulesMatchesOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesMatchesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod">PutMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutMethod` <a name="PutMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod"></a>

```csharp
private void PutMethod(NetworkServicesGrpcRouteRulesMatchesMethod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList">NetworkServicesGrpcRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.method">Method</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference">NetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput">MethodInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers"></a>

```csharp
public NetworkServicesGrpcRouteRulesMatchesHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList">NetworkServicesGrpcRouteRulesMatchesHeadersList</a>

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.method"></a>

```csharp
public NetworkServicesGrpcRouteRulesMatchesMethodOutputReference Method { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference">NetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput"></a>

```csharp
public NetworkServicesGrpcRouteRulesMatchesMethod MethodInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesGrpcRouteRulesOutputReference <a name="NetworkServicesGrpcRouteRulesOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putMatches">PutMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetMatches">ResetMatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putAction"></a>

```csharp
private void PutAction(NetworkServicesGrpcRouteRulesAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

---

##### `PutMatches` <a name="PutMatches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putMatches"></a>

```csharp
private void PutMatches(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetMatches` <a name="ResetMatches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetMatches"></a>

```csharp
private void ResetMatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference">NetworkServicesGrpcRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matches">Matches</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList">NetworkServicesGrpcRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matchesInput">MatchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.action"></a>

```csharp
public NetworkServicesGrpcRouteRulesActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference">NetworkServicesGrpcRouteRulesActionOutputReference</a>

---

##### `Matches`<sup>Required</sup> <a name="Matches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matches"></a>

```csharp
public NetworkServicesGrpcRouteRulesMatchesList Matches { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList">NetworkServicesGrpcRouteRulesMatchesList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.actionInput"></a>

```csharp
public NetworkServicesGrpcRouteRulesAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

---

##### `MatchesInput`<sup>Optional</sup> <a name="MatchesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matchesInput"></a>

```csharp
public object MatchesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesGrpcRouteTimeoutsOutputReference <a name="NetworkServicesGrpcRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesGrpcRouteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



