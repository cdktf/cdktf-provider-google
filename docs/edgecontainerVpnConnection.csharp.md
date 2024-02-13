# `edgecontainerVpnConnection` Submodule <a name="`edgecontainerVpnConnection` Submodule" id="@cdktf/provider-google.edgecontainerVpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgecontainerVpnConnection <a name="EdgecontainerVpnConnection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection google_edgecontainer_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnection(Construct Scope, string Id, EdgecontainerVpnConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig">EdgecontainerVpnConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig">EdgecontainerVpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject">PutVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetEnableHighAvailability">ResetEnableHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetNatGatewayIp">ResetNatGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpc">ResetVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpcProject">ResetVpcProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(EdgecontainerVpnConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

---

##### `PutVpcProject` <a name="PutVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject"></a>

```csharp
private void PutVpcProject(EdgecontainerVpnConnectionVpcProject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---

##### `ResetEnableHighAvailability` <a name="ResetEnableHighAvailability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetEnableHighAvailability"></a>

```csharp
private void ResetEnableHighAvailability()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNatGatewayIp` <a name="ResetNatGatewayIp" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetNatGatewayIp"></a>

```csharp
private void ResetNatGatewayIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetRouter"></a>

```csharp
private void ResetRouter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpc"></a>

```csharp
private void ResetVpc()
```

##### `ResetVpcProject` <a name="ResetVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpcProject"></a>

```csharp
private void ResetVpcProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerVpnConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerVpnConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerVpnConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerVpnConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EdgecontainerVpnConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EdgecontainerVpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EdgecontainerVpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList">EdgecontainerVpnConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference">EdgecontainerVpnConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProject">VpcProject</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference">EdgecontainerVpnConnectionVpcProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailabilityInput">EnableHighAvailabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIpInput">NatGatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.routerInput">RouterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcInput">VpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProjectInput">VpcProjectInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailability">EnableHighAvailability</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIp">NatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.router">Router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpc">Vpc</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.details"></a>

```csharp
public EdgecontainerVpnConnectionDetailsList Details { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList">EdgecontainerVpnConnectionDetailsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeouts"></a>

```csharp
public EdgecontainerVpnConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference">EdgecontainerVpnConnectionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VpcProject`<sup>Required</sup> <a name="VpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProject"></a>

```csharp
public EdgecontainerVpnConnectionVpcProjectOutputReference VpcProject { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference">EdgecontainerVpnConnectionVpcProjectOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `EnableHighAvailabilityInput`<sup>Optional</sup> <a name="EnableHighAvailabilityInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailabilityInput"></a>

```csharp
public object EnableHighAvailabilityInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NatGatewayIpInput`<sup>Optional</sup> <a name="NatGatewayIpInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIpInput"></a>

```csharp
public string NatGatewayIpInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.routerInput"></a>

```csharp
public string RouterInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcInput"></a>

```csharp
public string VpcInput { get; }
```

- *Type:* string

---

##### `VpcProjectInput`<sup>Optional</sup> <a name="VpcProjectInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProjectInput"></a>

```csharp
public EdgecontainerVpnConnectionVpcProject VpcProjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `EnableHighAvailability`<sup>Required</sup> <a name="EnableHighAvailability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailability"></a>

```csharp
public object EnableHighAvailability { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NatGatewayIp`<sup>Required</sup> <a name="NatGatewayIp" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIp"></a>

```csharp
public string NatGatewayIp { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.router"></a>

```csharp
public string Router { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpc"></a>

```csharp
public string Vpc { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EdgecontainerVpnConnectionConfig <a name="EdgecontainerVpnConnectionConfig" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Cluster,
    string Location,
    string Name,
    object EnableHighAvailability = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string NatGatewayIp = null,
    string Project = null,
    string Router = null,
    EdgecontainerVpnConnectionTimeouts Timeouts = null,
    string Vpc = null,
    EdgecontainerVpnConnectionVpcProject VpcProject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.cluster">Cluster</a></code> | <code>string</code> | The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.location">Location</a></code> | <code>string</code> | Google Cloud Platform location. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.name">Name</a></code> | <code>string</code> | The resource name of VPN connection. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.enableHighAvailability">EnableHighAvailability</a></code> | <code>object</code> | Whether this VPN connection has HA enabled on cluster side. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.natGatewayIp">NatGatewayIp</a></code> | <code>string</code> | NAT gateway IP, or WAN IP address. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.router">Router</a></code> | <code>string</code> | The VPN connection Cloud Router name. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpc">Vpc</a></code> | <code>string</code> | The network ID of VPC to connect to. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpcProject">VpcProject</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | vpc_project block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#cluster EdgecontainerVpnConnection#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Google Cloud Platform location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#location EdgecontainerVpnConnection#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#name EdgecontainerVpnConnection#name}

---

##### `EnableHighAvailability`<sup>Optional</sup> <a name="EnableHighAvailability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.enableHighAvailability"></a>

```csharp
public object EnableHighAvailability { get; set; }
```

- *Type:* object

Whether this VPN connection has HA enabled on cluster side.

If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#enable_high_availability EdgecontainerVpnConnection#enable_high_availability}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#labels EdgecontainerVpnConnection#labels}

---

##### `NatGatewayIp`<sup>Optional</sup> <a name="NatGatewayIp" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.natGatewayIp"></a>

```csharp
public string NatGatewayIp { get; set; }
```

- *Type:* string

NAT gateway IP, or WAN IP address.

If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#nat_gateway_ip EdgecontainerVpnConnection#nat_gateway_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}.

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.router"></a>

```csharp
public string Router { get; set; }
```

- *Type:* string

The VPN connection Cloud Router name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#router EdgecontainerVpnConnection#router}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.timeouts"></a>

```csharp
public EdgecontainerVpnConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#timeouts EdgecontainerVpnConnection#timeouts}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpc"></a>

```csharp
public string Vpc { get; set; }
```

- *Type:* string

The network ID of VPC to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#vpc EdgecontainerVpnConnection#vpc}

---

##### `VpcProject`<sup>Optional</sup> <a name="VpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpcProject"></a>

```csharp
public EdgecontainerVpnConnectionVpcProject VpcProject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

vpc_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#vpc_project EdgecontainerVpnConnection#vpc_project}

---

### EdgecontainerVpnConnectionDetails <a name="EdgecontainerVpnConnectionDetails" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionDetails {

};
```


### EdgecontainerVpnConnectionDetailsCloudRouter <a name="EdgecontainerVpnConnectionDetailsCloudRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionDetailsCloudRouter {

};
```


### EdgecontainerVpnConnectionDetailsCloudVpns <a name="EdgecontainerVpnConnectionDetailsCloudVpns" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionDetailsCloudVpns {

};
```


### EdgecontainerVpnConnectionTimeouts <a name="EdgecontainerVpnConnectionTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#create EdgecontainerVpnConnection#create}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#delete EdgecontainerVpnConnection#delete}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#update EdgecontainerVpnConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#create EdgecontainerVpnConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#delete EdgecontainerVpnConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#update EdgecontainerVpnConnection#update}.

---

### EdgecontainerVpnConnectionVpcProject <a name="EdgecontainerVpnConnectionVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionVpcProject {
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.property.projectId">ProjectId</a></code> | <code>string</code> | The project of the VPC to connect to. If not specified, it is the same as the cluster project. |

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project of the VPC to connect to. If not specified, it is the same as the cluster project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/edgecontainer_vpn_connection#project_id EdgecontainerVpnConnection#project_id}

---

## Classes <a name="Classes" id="Classes"></a>

### EdgecontainerVpnConnectionDetailsCloudRouterList <a name="EdgecontainerVpnConnectionDetailsCloudRouterList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionDetailsCloudRouterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get"></a>

```csharp
private EdgecontainerVpnConnectionDetailsCloudRouterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EdgecontainerVpnConnectionDetailsCloudRouterOutputReference <a name="EdgecontainerVpnConnectionDetailsCloudRouterOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionDetailsCloudRouterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter">EdgecontainerVpnConnectionDetailsCloudRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerVpnConnectionDetailsCloudRouter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter">EdgecontainerVpnConnectionDetailsCloudRouter</a>

---


### EdgecontainerVpnConnectionDetailsCloudVpnsList <a name="EdgecontainerVpnConnectionDetailsCloudVpnsList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionDetailsCloudVpnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get"></a>

```csharp
private EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference <a name="EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns">EdgecontainerVpnConnectionDetailsCloudVpns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerVpnConnectionDetailsCloudVpns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns">EdgecontainerVpnConnectionDetailsCloudVpns</a>

---


### EdgecontainerVpnConnectionDetailsList <a name="EdgecontainerVpnConnectionDetailsList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get"></a>

```csharp
private EdgecontainerVpnConnectionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EdgecontainerVpnConnectionDetailsOutputReference <a name="EdgecontainerVpnConnectionDetailsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter">CloudRouter</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList">EdgecontainerVpnConnectionDetailsCloudRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns">CloudVpns</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList">EdgecontainerVpnConnectionDetailsCloudVpnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.error">Error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails">EdgecontainerVpnConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudRouter`<sup>Required</sup> <a name="CloudRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter"></a>

```csharp
public EdgecontainerVpnConnectionDetailsCloudRouterList CloudRouter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList">EdgecontainerVpnConnectionDetailsCloudRouterList</a>

---

##### `CloudVpns`<sup>Required</sup> <a name="CloudVpns" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns"></a>

```csharp
public EdgecontainerVpnConnectionDetailsCloudVpnsList CloudVpns { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList">EdgecontainerVpnConnectionDetailsCloudVpnsList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.error"></a>

```csharp
public string Error { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerVpnConnectionDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails">EdgecontainerVpnConnectionDetails</a>

---


### EdgecontainerVpnConnectionTimeoutsOutputReference <a name="EdgecontainerVpnConnectionTimeoutsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EdgecontainerVpnConnectionVpcProjectOutputReference <a name="EdgecontainerVpnConnectionVpcProjectOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerVpnConnectionVpcProjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerVpnConnectionVpcProject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---



