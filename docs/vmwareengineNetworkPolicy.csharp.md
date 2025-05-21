# `vmwareengineNetworkPolicy` Submodule <a name="`vmwareengineNetworkPolicy` Submodule" id="@cdktf/provider-google.vmwareengineNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineNetworkPolicy <a name="VmwareengineNetworkPolicy" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy google_vmwareengine_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineNetworkPolicy(Construct Scope, string Id, VmwareengineNetworkPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig">VmwareengineNetworkPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig">VmwareengineNetworkPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putExternalIp">PutExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putInternetAccess">PutInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetExternalIp">ResetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetInternetAccess">ResetInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalIp` <a name="PutExternalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putExternalIp"></a>

```csharp
private void PutExternalIp(VmwareengineNetworkPolicyExternalIp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putExternalIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

---

##### `PutInternetAccess` <a name="PutInternetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putInternetAccess"></a>

```csharp
private void PutInternetAccess(VmwareengineNetworkPolicyInternetAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putInternetAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(VmwareengineNetworkPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExternalIp` <a name="ResetExternalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetExternalIp"></a>

```csharp
private void ResetExternalIp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternetAccess` <a name="ResetInternetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetInternetAccess"></a>

```csharp
private void ResetInternetAccess()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VmwareengineNetworkPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VmwareengineNetworkPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VmwareengineNetworkPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VmwareengineNetworkPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VmwareengineNetworkPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VmwareengineNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIp">ExternalIp</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference">VmwareengineNetworkPolicyExternalIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference">VmwareengineNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference">VmwareengineNetworkPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical">VmwareEngineNetworkCanonical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidrInput">EdgeServicesCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIpInput">ExternalIpInput</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccessInput">InternetAccessInput</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkInput">VmwareEngineNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidr">EdgeServicesCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIp"></a>

```csharp
public VmwareengineNetworkPolicyExternalIpOutputReference ExternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference">VmwareengineNetworkPolicyExternalIpOutputReference</a>

---

##### `InternetAccess`<sup>Required</sup> <a name="InternetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccess"></a>

```csharp
public VmwareengineNetworkPolicyInternetAccessOutputReference InternetAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference">VmwareengineNetworkPolicyInternetAccessOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeouts"></a>

```csharp
public VmwareengineNetworkPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference">VmwareengineNetworkPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VmwareEngineNetworkCanonical`<sup>Required</sup> <a name="VmwareEngineNetworkCanonical" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical"></a>

```csharp
public string VmwareEngineNetworkCanonical { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EdgeServicesCidrInput`<sup>Optional</sup> <a name="EdgeServicesCidrInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidrInput"></a>

```csharp
public string EdgeServicesCidrInput { get; }
```

- *Type:* string

---

##### `ExternalIpInput`<sup>Optional</sup> <a name="ExternalIpInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIpInput"></a>

```csharp
public VmwareengineNetworkPolicyExternalIp ExternalIpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternetAccessInput`<sup>Optional</sup> <a name="InternetAccessInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccessInput"></a>

```csharp
public VmwareengineNetworkPolicyInternetAccess InternetAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmwareEngineNetworkInput`<sup>Optional</sup> <a name="VmwareEngineNetworkInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkInput"></a>

```csharp
public string VmwareEngineNetworkInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EdgeServicesCidr`<sup>Required</sup> <a name="EdgeServicesCidr" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidr"></a>

```csharp
public string EdgeServicesCidr { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetwork"></a>

```csharp
public string VmwareEngineNetwork { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineNetworkPolicyConfig <a name="VmwareengineNetworkPolicyConfig" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineNetworkPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EdgeServicesCidr,
    string Location,
    string Name,
    string VmwareEngineNetwork,
    string Description = null,
    VmwareengineNetworkPolicyExternalIp ExternalIp = null,
    string Id = null,
    VmwareengineNetworkPolicyInternetAccess InternetAccess = null,
    string Project = null,
    VmwareengineNetworkPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.edgeServicesCidr">EdgeServicesCidr</a></code> | <code>string</code> | IP address range in CIDR notation used to create internet access and external IP access. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.location">Location</a></code> | <code>string</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.name">Name</a></code> | <code>string</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>string</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.description">Description</a></code> | <code>string</code> | User-provided description for this network policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.externalIp">ExternalIp</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | external_ip block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | internet_access block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EdgeServicesCidr`<sup>Required</sup> <a name="EdgeServicesCidr" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.edgeServicesCidr"></a>

```csharp
public string EdgeServicesCidr { get; set; }
```

- *Type:* string

IP address range in CIDR notation used to create internet access and external IP access.

An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#edge_services_cidr VmwareengineNetworkPolicy#edge_services_cidr}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#location VmwareengineNetworkPolicy#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#name VmwareengineNetworkPolicy#name}

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork"></a>

```csharp
public string VmwareEngineNetwork { get; set; }
```

- *Type:* string

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#vmware_engine_network VmwareengineNetworkPolicy#vmware_engine_network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-provided description for this network policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#description VmwareengineNetworkPolicy#description}

---

##### `ExternalIp`<sup>Optional</sup> <a name="ExternalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.externalIp"></a>

```csharp
public VmwareengineNetworkPolicyExternalIp ExternalIp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#external_ip VmwareengineNetworkPolicy#external_ip}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetAccess`<sup>Optional</sup> <a name="InternetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.internetAccess"></a>

```csharp
public VmwareengineNetworkPolicyInternetAccess InternetAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

internet_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#internet_access VmwareengineNetworkPolicy#internet_access}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.timeouts"></a>

```csharp
public VmwareengineNetworkPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#timeouts VmwareengineNetworkPolicy#timeouts}

---

### VmwareengineNetworkPolicyExternalIp <a name="VmwareengineNetworkPolicyExternalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineNetworkPolicyExternalIp {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp.property.enabled">Enabled</a></code> | <code>object</code> | True if the service is enabled; false otherwise. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#enabled VmwareengineNetworkPolicy#enabled}

---

### VmwareengineNetworkPolicyInternetAccess <a name="VmwareengineNetworkPolicyInternetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineNetworkPolicyInternetAccess {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess.property.enabled">Enabled</a></code> | <code>object</code> | True if the service is enabled; false otherwise. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#enabled VmwareengineNetworkPolicy#enabled}

---

### VmwareengineNetworkPolicyTimeouts <a name="VmwareengineNetworkPolicyTimeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineNetworkPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#create VmwareengineNetworkPolicy#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#delete VmwareengineNetworkPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#update VmwareengineNetworkPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#create VmwareengineNetworkPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#delete VmwareengineNetworkPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/vmwareengine_network_policy#update VmwareengineNetworkPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineNetworkPolicyExternalIpOutputReference <a name="VmwareengineNetworkPolicyExternalIpOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineNetworkPolicyExternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue"></a>

```csharp
public VmwareengineNetworkPolicyExternalIp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

---


### VmwareengineNetworkPolicyInternetAccessOutputReference <a name="VmwareengineNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineNetworkPolicyInternetAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```csharp
public VmwareengineNetworkPolicyInternetAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

---


### VmwareengineNetworkPolicyTimeoutsOutputReference <a name="VmwareengineNetworkPolicyTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineNetworkPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



