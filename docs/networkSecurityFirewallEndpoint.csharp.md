# `networkSecurityFirewallEndpoint` Submodule <a name="`networkSecurityFirewallEndpoint` Submodule" id="@cdktf/provider-google.networkSecurityFirewallEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityFirewallEndpoint <a name="NetworkSecurityFirewallEndpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint google_network_security_firewall_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityFirewallEndpoint(Construct Scope, string Id, NetworkSecurityFirewallEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig">NetworkSecurityFirewallEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig">NetworkSecurityFirewallEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityFirewallEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityFirewallEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityFirewallEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityFirewallEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityFirewallEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityFirewallEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkSecurityFirewallEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityFirewallEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityFirewallEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityFirewallEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.associatedNetworks">AssociatedNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference">NetworkSecurityFirewallEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectIdInput">BillingProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectId">BillingProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssociatedNetworks`<sup>Required</sup> <a name="AssociatedNetworks" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.associatedNetworks"></a>

```csharp
public string[] AssociatedNetworks { get; }
```

- *Type:* string[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeouts"></a>

```csharp
public NetworkSecurityFirewallEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference">NetworkSecurityFirewallEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BillingProjectIdInput`<sup>Optional</sup> <a name="BillingProjectIdInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectIdInput"></a>

```csharp
public string BillingProjectIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BillingProjectId`<sup>Required</sup> <a name="BillingProjectId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectId"></a>

```csharp
public string BillingProjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityFirewallEndpointConfig <a name="NetworkSecurityFirewallEndpointConfig" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityFirewallEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BillingProjectId,
    string Location,
    string Name,
    string Parent,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    NetworkSecurityFirewallEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.billingProjectId">BillingProjectId</a></code> | <code>string</code> | Project to bill on endpoint uptime usage. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.location">Location</a></code> | <code>string</code> | The location (zone) of the firewall endpoint. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.name">Name</a></code> | <code>string</code> | The name of the firewall endpoint resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.parent">Parent</a></code> | <code>string</code> | The name of the parent this firewall endpoint belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BillingProjectId`<sup>Required</sup> <a name="BillingProjectId" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.billingProjectId"></a>

```csharp
public string BillingProjectId { get; set; }
```

- *Type:* string

Project to bill on endpoint uptime usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#billing_project_id NetworkSecurityFirewallEndpoint#billing_project_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location (zone) of the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#location NetworkSecurityFirewallEndpoint#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the firewall endpoint resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#name NetworkSecurityFirewallEndpoint#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The name of the parent this firewall endpoint belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#parent NetworkSecurityFirewallEndpoint#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#labels NetworkSecurityFirewallEndpoint#labels}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.timeouts"></a>

```csharp
public NetworkSecurityFirewallEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#timeouts NetworkSecurityFirewallEndpoint#timeouts}

---

### NetworkSecurityFirewallEndpointTimeouts <a name="NetworkSecurityFirewallEndpointTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityFirewallEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityFirewallEndpointTimeoutsOutputReference <a name="NetworkSecurityFirewallEndpointTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityFirewallEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



