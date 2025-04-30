# `computeRegionTargetTcpProxy` Submodule <a name="`computeRegionTargetTcpProxy` Submodule" id="@cdktf/provider-google.computeRegionTargetTcpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionTargetTcpProxy <a name="ComputeRegionTargetTcpProxy" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy google_compute_region_target_tcp_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionTargetTcpProxy(Construct Scope, string Id, ComputeRegionTargetTcpProxyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig">ComputeRegionTargetTcpProxyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig">ComputeRegionTargetTcpProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetProxyBind">ResetProxyBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionTargetTcpProxyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeouts">ComputeRegionTargetTcpProxyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProxyBind` <a name="ResetProxyBind" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetProxyBind"></a>

```csharp
private void ResetProxyBind()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionTargetTcpProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionTargetTcpProxy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionTargetTcpProxy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionTargetTcpProxy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionTargetTcpProxy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRegionTargetTcpProxy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionTargetTcpProxy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionTargetTcpProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionTargetTcpProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyId">ProxyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference">ComputeRegionTargetTcpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.backendServiceInput">BackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyBindInput">ProxyBindInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.backendService">BackendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyBind">ProxyBind</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyId"></a>

```csharp
public double ProxyId { get; }
```

- *Type:* double

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.timeouts"></a>

```csharp
public ComputeRegionTargetTcpProxyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference">ComputeRegionTargetTcpProxyTimeoutsOutputReference</a>

---

##### `BackendServiceInput`<sup>Optional</sup> <a name="BackendServiceInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.backendServiceInput"></a>

```csharp
public string BackendServiceInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProxyBindInput`<sup>Optional</sup> <a name="ProxyBindInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyBindInput"></a>

```csharp
public object ProxyBindInput { get; }
```

- *Type:* object

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.backendService"></a>

```csharp
public string BackendService { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProxyBind`<sup>Required</sup> <a name="ProxyBind" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyBind"></a>

```csharp
public object ProxyBind { get; }
```

- *Type:* object

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionTargetTcpProxyConfig <a name="ComputeRegionTargetTcpProxyConfig" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionTargetTcpProxyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackendService,
    string Name,
    string Description = null,
    string Id = null,
    string Project = null,
    object ProxyBind = null,
    string ProxyHeader = null,
    string Region = null,
    ComputeRegionTargetTcpProxyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.backendService">BackendService</a></code> | <code>string</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#id ComputeRegionTargetTcpProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#project ComputeRegionTargetTcpProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.proxyBind">ProxyBind</a></code> | <code>object</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.region">Region</a></code> | <code>string</code> | The Region in which the created target TCP proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeouts">ComputeRegionTargetTcpProxyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.backendService"></a>

```csharp
public string BackendService { get; set; }
```

- *Type:* string

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#backend_service ComputeRegionTargetTcpProxy#backend_service}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#name ComputeRegionTargetTcpProxy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#description ComputeRegionTargetTcpProxy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#id ComputeRegionTargetTcpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#project ComputeRegionTargetTcpProxy#project}.

---

##### `ProxyBind`<sup>Optional</sup> <a name="ProxyBind" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.proxyBind"></a>

```csharp
public object ProxyBind { get; set; }
```

- *Type:* object

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#proxy_bind ComputeRegionTargetTcpProxy#proxy_bind}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#proxy_header ComputeRegionTargetTcpProxy#proxy_header}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region in which the created target TCP proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#region ComputeRegionTargetTcpProxy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyConfig.property.timeouts"></a>

```csharp
public ComputeRegionTargetTcpProxyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeouts">ComputeRegionTargetTcpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#timeouts ComputeRegionTargetTcpProxy#timeouts}

---

### ComputeRegionTargetTcpProxyTimeouts <a name="ComputeRegionTargetTcpProxyTimeouts" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionTargetTcpProxyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#create ComputeRegionTargetTcpProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#delete ComputeRegionTargetTcpProxy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#create ComputeRegionTargetTcpProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_target_tcp_proxy#delete ComputeRegionTargetTcpProxy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionTargetTcpProxyTimeoutsOutputReference <a name="ComputeRegionTargetTcpProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionTargetTcpProxyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionTargetTcpProxy.ComputeRegionTargetTcpProxyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



