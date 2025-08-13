# `networkServicesTcpRoute` Submodule <a name="`networkServicesTcpRoute` Submodule" id="@cdktf/provider-google.networkServicesTcpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesTcpRoute <a name="NetworkServicesTcpRoute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route google_network_services_tcp_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRoute(Construct Scope, string Id, NetworkServicesTcpRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig">NetworkServicesTcpRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig">NetworkServicesTcpRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetGateways">ResetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetMeshes">ResetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkServicesTcpRouteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGateways` <a name="ResetGateways" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetGateways"></a>

```csharp
private void ResetGateways()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMeshes` <a name="ResetMeshes" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetMeshes"></a>

```csharp
private void ResetMeshes()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesTcpRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesTcpRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesTcpRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesTcpRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesTcpRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkServicesTcpRoute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesTcpRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesTcpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesTcpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList">NetworkServicesTcpRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference">NetworkServicesTcpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.gatewaysInput">GatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.meshesInput">MeshesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.gateways">Gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.meshes">Meshes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.rules"></a>

```csharp
public NetworkServicesTcpRouteRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList">NetworkServicesTcpRouteRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.timeouts"></a>

```csharp
public NetworkServicesTcpRouteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference">NetworkServicesTcpRouteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GatewaysInput`<sup>Optional</sup> <a name="GatewaysInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.gatewaysInput"></a>

```csharp
public string[] GatewaysInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MeshesInput`<sup>Optional</sup> <a name="MeshesInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.meshesInput"></a>

```csharp
public string[] MeshesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Gateways`<sup>Required</sup> <a name="Gateways" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.gateways"></a>

```csharp
public string[] Gateways { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Meshes`<sup>Required</sup> <a name="Meshes" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.meshes"></a>

```csharp
public string[] Meshes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesTcpRouteConfig <a name="NetworkServicesTcpRouteConfig" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Rules,
    string Description = null,
    string[] Gateways = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string[] Meshes = null,
    string Project = null,
    NetworkServicesTcpRouteTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.name">Name</a></code> | <code>string</code> | Name of the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.gateways">Gateways</a></code> | <code>string[]</code> | Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#id NetworkServicesTcpRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.meshes">Meshes</a></code> | <code>string[]</code> | Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#project NetworkServicesTcpRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the TcpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#name NetworkServicesTcpRoute#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#rules NetworkServicesTcpRoute#rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#description NetworkServicesTcpRoute#description}

---

##### `Gateways`<sup>Optional</sup> <a name="Gateways" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.gateways"></a>

```csharp
public string[] Gateways { get; set; }
```

- *Type:* string[]

Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#gateways NetworkServicesTcpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#id NetworkServicesTcpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#labels NetworkServicesTcpRoute#labels}

---

##### `Meshes`<sup>Optional</sup> <a name="Meshes" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.meshes"></a>

```csharp
public string[] Meshes { get; set; }
```

- *Type:* string[]

Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#meshes NetworkServicesTcpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#project NetworkServicesTcpRoute#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.timeouts"></a>

```csharp
public NetworkServicesTcpRouteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#timeouts NetworkServicesTcpRoute#timeouts}

---

### NetworkServicesTcpRouteRules <a name="NetworkServicesTcpRouteRules" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRules {
    NetworkServicesTcpRouteRulesAction Action,
    object Matches = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.property.matches">Matches</a></code> | <code>object</code> | matches block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.property.action"></a>

```csharp
public NetworkServicesTcpRouteRulesAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#action NetworkServicesTcpRoute#action}

---

##### `Matches`<sup>Optional</sup> <a name="Matches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.property.matches"></a>

```csharp
public object Matches { get; set; }
```

- *Type:* object

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#matches NetworkServicesTcpRoute#matches}

---

### NetworkServicesTcpRouteRulesAction <a name="NetworkServicesTcpRouteRulesAction" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesAction {
    object Destinations = null,
    string IdleTimeout = null,
    object OriginalDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.destinations">Destinations</a></code> | <code>object</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | Specifies the idle timeout for the selected route. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.originalDestination">OriginalDestination</a></code> | <code>object</code> | If true, Router will use the destination IP and port of the original connection as the destination of the request. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.destinations"></a>

```csharp
public object Destinations { get; set; }
```

- *Type:* object

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#destinations NetworkServicesTcpRoute#destinations}

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; set; }
```

- *Type:* string

Specifies the idle timeout for the selected route.

The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#idle_timeout NetworkServicesTcpRoute#idle_timeout}

---

##### `OriginalDestination`<sup>Optional</sup> <a name="OriginalDestination" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.originalDestination"></a>

```csharp
public object OriginalDestination { get; set; }
```

- *Type:* object

If true, Router will use the destination IP and port of the original connection as the destination of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#original_destination NetworkServicesTcpRoute#original_destination}

---

### NetworkServicesTcpRouteRulesActionDestinations <a name="NetworkServicesTcpRouteRulesActionDestinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesActionDestinations {
    string ServiceName = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.property.serviceName">ServiceName</a></code> | <code>string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.property.weight">Weight</a></code> | <code>double</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#service_name NetworkServicesTcpRoute#service_name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#weight NetworkServicesTcpRoute#weight}

---

### NetworkServicesTcpRouteRulesMatches <a name="NetworkServicesTcpRouteRulesMatches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesMatches {
    string Address,
    string Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.property.address">Address</a></code> | <code>string</code> | Must be specified in the CIDR range format. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.property.port">Port</a></code> | <code>string</code> | Specifies the destination port to match against. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Must be specified in the CIDR range format.

A CIDR range consists of an IP Address and a prefix length to construct the subnet mask.
By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#address NetworkServicesTcpRoute#address}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Specifies the destination port to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#port NetworkServicesTcpRoute#port}

---

### NetworkServicesTcpRouteTimeouts <a name="NetworkServicesTcpRouteTimeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#create NetworkServicesTcpRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#delete NetworkServicesTcpRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#update NetworkServicesTcpRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#create NetworkServicesTcpRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#delete NetworkServicesTcpRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#update NetworkServicesTcpRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesTcpRouteRulesActionDestinationsList <a name="NetworkServicesTcpRouteRulesActionDestinationsList" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesActionDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.get"></a>

```csharp
private NetworkServicesTcpRouteRulesActionDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesTcpRouteRulesActionDestinationsOutputReference <a name="NetworkServicesTcpRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesActionDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesTcpRouteRulesActionOutputReference <a name="NetworkServicesTcpRouteRulesActionOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetOriginalDestination">ResetOriginalDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* object

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetIdleTimeout"></a>

```csharp
private void ResetIdleTimeout()
```

##### `ResetOriginalDestination` <a name="ResetOriginalDestination" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetOriginalDestination"></a>

```csharp
private void ResetOriginalDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList">NetworkServicesTcpRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.originalDestinationInput">OriginalDestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.originalDestination">OriginalDestination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.destinations"></a>

```csharp
public NetworkServicesTcpRouteRulesActionDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList">NetworkServicesTcpRouteRulesActionDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.destinationsInput"></a>

```csharp
public object DestinationsInput { get; }
```

- *Type:* object

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeoutInput"></a>

```csharp
public string IdleTimeoutInput { get; }
```

- *Type:* string

---

##### `OriginalDestinationInput`<sup>Optional</sup> <a name="OriginalDestinationInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.originalDestinationInput"></a>

```csharp
public object OriginalDestinationInput { get; }
```

- *Type:* object

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; }
```

- *Type:* string

---

##### `OriginalDestination`<sup>Required</sup> <a name="OriginalDestination" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.originalDestination"></a>

```csharp
public object OriginalDestination { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesTcpRouteRulesAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a>

---


### NetworkServicesTcpRouteRulesList <a name="NetworkServicesTcpRouteRulesList" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.get"></a>

```csharp
private NetworkServicesTcpRouteRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesTcpRouteRulesMatchesList <a name="NetworkServicesTcpRouteRulesMatchesList" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesMatchesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.get"></a>

```csharp
private NetworkServicesTcpRouteRulesMatchesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesTcpRouteRulesMatchesOutputReference <a name="NetworkServicesTcpRouteRulesMatchesOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesMatchesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesTcpRouteRulesOutputReference <a name="NetworkServicesTcpRouteRulesOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putMatches">PutMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resetMatches">ResetMatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putAction"></a>

```csharp
private void PutAction(NetworkServicesTcpRouteRulesAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a>

---

##### `PutMatches` <a name="PutMatches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putMatches"></a>

```csharp
private void PutMatches(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* object

---

##### `ResetMatches` <a name="ResetMatches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resetMatches"></a>

```csharp
private void ResetMatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference">NetworkServicesTcpRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.matches">Matches</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList">NetworkServicesTcpRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.matchesInput">MatchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.action"></a>

```csharp
public NetworkServicesTcpRouteRulesActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference">NetworkServicesTcpRouteRulesActionOutputReference</a>

---

##### `Matches`<sup>Required</sup> <a name="Matches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.matches"></a>

```csharp
public NetworkServicesTcpRouteRulesMatchesList Matches { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList">NetworkServicesTcpRouteRulesMatchesList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.actionInput"></a>

```csharp
public NetworkServicesTcpRouteRulesAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a>

---

##### `MatchesInput`<sup>Optional</sup> <a name="MatchesInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.matchesInput"></a>

```csharp
public object MatchesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesTcpRouteTimeoutsOutputReference <a name="NetworkServicesTcpRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesTcpRouteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



