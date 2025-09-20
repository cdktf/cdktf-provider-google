# `networkSecurityInterceptEndpointGroupAssociation` Submodule <a name="`networkSecurityInterceptEndpointGroupAssociation` Submodule" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityInterceptEndpointGroupAssociation <a name="NetworkSecurityInterceptEndpointGroupAssociation" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association google_network_security_intercept_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociation(Construct Scope, string Id, NetworkSecurityInterceptEndpointGroupAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig">NetworkSecurityInterceptEndpointGroupAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig">NetworkSecurityInterceptEndpointGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId">ResetInterceptEndpointGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityInterceptEndpointGroupAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterceptEndpointGroupAssociationId` <a name="ResetInterceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId"></a>

```csharp
private void ResetInterceptEndpointGroupAssociationId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityInterceptEndpointGroupAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityInterceptEndpointGroupAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityInterceptEndpointGroupAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityInterceptEndpointGroupAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityInterceptEndpointGroupAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityInterceptEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityInterceptEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails">LocationsDetails</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput">InterceptEndpointGroupAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput">InterceptEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup">InterceptEndpointGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId">InterceptEndpointGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locations"></a>

```csharp
public NetworkSecurityInterceptEndpointGroupAssociationLocationsList Locations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsList</a>

---

##### `LocationsDetails`<sup>Required</sup> <a name="LocationsDetails" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails"></a>

```csharp
public NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList LocationsDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeouts"></a>

```csharp
public NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterceptEndpointGroupAssociationIdInput`<sup>Optional</sup> <a name="InterceptEndpointGroupAssociationIdInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput"></a>

```csharp
public string InterceptEndpointGroupAssociationIdInput { get; }
```

- *Type:* string

---

##### `InterceptEndpointGroupInput`<sup>Optional</sup> <a name="InterceptEndpointGroupInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput"></a>

```csharp
public string InterceptEndpointGroupInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterceptEndpointGroup`<sup>Required</sup> <a name="InterceptEndpointGroup" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup"></a>

```csharp
public string InterceptEndpointGroup { get; }
```

- *Type:* string

---

##### `InterceptEndpointGroupAssociationId`<sup>Required</sup> <a name="InterceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId"></a>

```csharp
public string InterceptEndpointGroupAssociationId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityInterceptEndpointGroupAssociationConfig <a name="NetworkSecurityInterceptEndpointGroupAssociationConfig" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InterceptEndpointGroup,
    string Location,
    string Network,
    string Id = null,
    string InterceptEndpointGroupAssociationId = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    NetworkSecurityInterceptEndpointGroupAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup">InterceptEndpointGroup</a></code> | <code>string</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.location">Location</a></code> | <code>string</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.network">Network</a></code> | <code>string</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId">InterceptEndpointGroupAssociationId</a></code> | <code>string</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InterceptEndpointGroup`<sup>Required</sup> <a name="InterceptEndpointGroup" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup"></a>

```csharp
public string InterceptEndpointGroup { get; set; }
```

- *Type:* string

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#location NetworkSecurityInterceptEndpointGroupAssociation#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#network NetworkSecurityInterceptEndpointGroupAssociation#network}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterceptEndpointGroupAssociationId`<sup>Optional</sup> <a name="InterceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId"></a>

```csharp
public string InterceptEndpointGroupAssociationId { get; set; }
```

- *Type:* string

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group_association_id NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group_association_id}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#labels NetworkSecurityInterceptEndpointGroupAssociation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts"></a>

```csharp
public NetworkSecurityInterceptEndpointGroupAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#timeouts NetworkSecurityInterceptEndpointGroupAssociation#timeouts}

---

### NetworkSecurityInterceptEndpointGroupAssociationLocations <a name="NetworkSecurityInterceptEndpointGroupAssociationLocations" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociationLocations {

};
```


### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails {

};
```


### NetworkSecurityInterceptEndpointGroupAssociationTimeouts <a name="NetworkSecurityInterceptEndpointGroupAssociationTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#create NetworkSecurityInterceptEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#delete NetworkSecurityInterceptEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#update NetworkSecurityInterceptEndpointGroupAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#create NetworkSecurityInterceptEndpointGroupAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#delete NetworkSecurityInterceptEndpointGroupAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_intercept_endpoint_group_association#update NetworkSecurityInterceptEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get"></a>

```csharp
private NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a>

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsList <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsList" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociationLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get"></a>

```csharp
private NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations">NetworkSecurityInterceptEndpointGroupAssociationLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityInterceptEndpointGroupAssociationLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations">NetworkSecurityInterceptEndpointGroupAssociationLocations</a>

---


### NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



