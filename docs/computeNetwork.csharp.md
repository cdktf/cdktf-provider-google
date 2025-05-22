# `computeNetwork` Submodule <a name="`computeNetwork` Submodule" id="@cdktf/provider-google.computeNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetwork <a name="ComputeNetwork" id="@cdktf/provider-google.computeNetwork.ComputeNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network google_compute_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetwork(Construct Scope, string Id, ComputeNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig">ComputeNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig">ComputeNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetAutoCreateSubnetworks">ResetAutoCreateSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetBgpAlwaysCompareMed">ResetBgpAlwaysCompareMed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetBgpBestPathSelectionMode">ResetBgpBestPathSelectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetBgpInterRegionCost">ResetBgpInterRegionCost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetDeleteDefaultRoutesOnCreate">ResetDeleteDefaultRoutesOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetEnableUlaInternalIpv6">ResetEnableUlaInternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetInternalIpv6Range">ResetInternalIpv6Range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder">ResetNetworkFirewallPolicyEnforcementOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetNetworkProfile">ResetNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetRoutingMode">ResetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeNetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a>

---

##### `ResetAutoCreateSubnetworks` <a name="ResetAutoCreateSubnetworks" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetAutoCreateSubnetworks"></a>

```csharp
private void ResetAutoCreateSubnetworks()
```

##### `ResetBgpAlwaysCompareMed` <a name="ResetBgpAlwaysCompareMed" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetBgpAlwaysCompareMed"></a>

```csharp
private void ResetBgpAlwaysCompareMed()
```

##### `ResetBgpBestPathSelectionMode` <a name="ResetBgpBestPathSelectionMode" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetBgpBestPathSelectionMode"></a>

```csharp
private void ResetBgpBestPathSelectionMode()
```

##### `ResetBgpInterRegionCost` <a name="ResetBgpInterRegionCost" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetBgpInterRegionCost"></a>

```csharp
private void ResetBgpInterRegionCost()
```

##### `ResetDeleteDefaultRoutesOnCreate` <a name="ResetDeleteDefaultRoutesOnCreate" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetDeleteDefaultRoutesOnCreate"></a>

```csharp
private void ResetDeleteDefaultRoutesOnCreate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableUlaInternalIpv6` <a name="ResetEnableUlaInternalIpv6" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetEnableUlaInternalIpv6"></a>

```csharp
private void ResetEnableUlaInternalIpv6()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternalIpv6Range` <a name="ResetInternalIpv6Range" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetInternalIpv6Range"></a>

```csharp
private void ResetInternalIpv6Range()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetNetworkFirewallPolicyEnforcementOrder` <a name="ResetNetworkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder"></a>

```csharp
private void ResetNetworkFirewallPolicyEnforcementOrder()
```

##### `ResetNetworkProfile` <a name="ResetNetworkProfile" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetNetworkProfile"></a>

```csharp
private void ResetNetworkProfile()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRoutingMode` <a name="ResetRoutingMode" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetRoutingMode"></a>

```csharp
private void ResetRoutingMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeNetwork resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.gatewayIpv4">GatewayIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.numericId">NumericId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference">ComputeNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworksInput">AutoCreateSubnetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpAlwaysCompareMedInput">BgpAlwaysCompareMedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpBestPathSelectionModeInput">BgpBestPathSelectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpInterRegionCostInput">BgpInterRegionCostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreateInput">DeleteDefaultRoutesOnCreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6Input">EnableUlaInternalIpv6Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6RangeInput">InternalIpv6RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput">NetworkFirewallPolicyEnforcementOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkProfileInput">NetworkProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.routingModeInput">RoutingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworks">AutoCreateSubnetworks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpAlwaysCompareMed">BgpAlwaysCompareMed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpBestPathSelectionMode">BgpBestPathSelectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpInterRegionCost">BgpInterRegionCost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreate">DeleteDefaultRoutesOnCreate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6">EnableUlaInternalIpv6</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6Range">InternalIpv6Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrder">NetworkFirewallPolicyEnforcementOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkProfile">NetworkProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.routingMode">RoutingMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GatewayIpv4`<sup>Required</sup> <a name="GatewayIpv4" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.gatewayIpv4"></a>

```csharp
public string GatewayIpv4 { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `NumericId`<sup>Required</sup> <a name="NumericId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.numericId"></a>

```csharp
public string NumericId { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.timeouts"></a>

```csharp
public ComputeNetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference">ComputeNetworkTimeoutsOutputReference</a>

---

##### `AutoCreateSubnetworksInput`<sup>Optional</sup> <a name="AutoCreateSubnetworksInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworksInput"></a>

```csharp
public object AutoCreateSubnetworksInput { get; }
```

- *Type:* object

---

##### `BgpAlwaysCompareMedInput`<sup>Optional</sup> <a name="BgpAlwaysCompareMedInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpAlwaysCompareMedInput"></a>

```csharp
public object BgpAlwaysCompareMedInput { get; }
```

- *Type:* object

---

##### `BgpBestPathSelectionModeInput`<sup>Optional</sup> <a name="BgpBestPathSelectionModeInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpBestPathSelectionModeInput"></a>

```csharp
public string BgpBestPathSelectionModeInput { get; }
```

- *Type:* string

---

##### `BgpInterRegionCostInput`<sup>Optional</sup> <a name="BgpInterRegionCostInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpInterRegionCostInput"></a>

```csharp
public string BgpInterRegionCostInput { get; }
```

- *Type:* string

---

##### `DeleteDefaultRoutesOnCreateInput`<sup>Optional</sup> <a name="DeleteDefaultRoutesOnCreateInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreateInput"></a>

```csharp
public object DeleteDefaultRoutesOnCreateInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableUlaInternalIpv6Input`<sup>Optional</sup> <a name="EnableUlaInternalIpv6Input" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6Input"></a>

```csharp
public object EnableUlaInternalIpv6Input { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternalIpv6RangeInput`<sup>Optional</sup> <a name="InternalIpv6RangeInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6RangeInput"></a>

```csharp
public string InternalIpv6RangeInput { get; }
```

- *Type:* string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyEnforcementOrderInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyEnforcementOrderInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput"></a>

```csharp
public string NetworkFirewallPolicyEnforcementOrderInput { get; }
```

- *Type:* string

---

##### `NetworkProfileInput`<sup>Optional</sup> <a name="NetworkProfileInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkProfileInput"></a>

```csharp
public string NetworkProfileInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoutingModeInput`<sup>Optional</sup> <a name="RoutingModeInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.routingModeInput"></a>

```csharp
public string RoutingModeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoCreateSubnetworks`<sup>Required</sup> <a name="AutoCreateSubnetworks" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworks"></a>

```csharp
public object AutoCreateSubnetworks { get; }
```

- *Type:* object

---

##### `BgpAlwaysCompareMed`<sup>Required</sup> <a name="BgpAlwaysCompareMed" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpAlwaysCompareMed"></a>

```csharp
public object BgpAlwaysCompareMed { get; }
```

- *Type:* object

---

##### `BgpBestPathSelectionMode`<sup>Required</sup> <a name="BgpBestPathSelectionMode" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpBestPathSelectionMode"></a>

```csharp
public string BgpBestPathSelectionMode { get; }
```

- *Type:* string

---

##### `BgpInterRegionCost`<sup>Required</sup> <a name="BgpInterRegionCost" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.bgpInterRegionCost"></a>

```csharp
public string BgpInterRegionCost { get; }
```

- *Type:* string

---

##### `DeleteDefaultRoutesOnCreate`<sup>Required</sup> <a name="DeleteDefaultRoutesOnCreate" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreate"></a>

```csharp
public object DeleteDefaultRoutesOnCreate { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableUlaInternalIpv6`<sup>Required</sup> <a name="EnableUlaInternalIpv6" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6"></a>

```csharp
public object EnableUlaInternalIpv6 { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalIpv6Range`<sup>Required</sup> <a name="InternalIpv6Range" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6Range"></a>

```csharp
public string InternalIpv6Range { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyEnforcementOrder`<sup>Required</sup> <a name="NetworkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrder"></a>

```csharp
public string NetworkFirewallPolicyEnforcementOrder { get; }
```

- *Type:* string

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkProfile"></a>

```csharp
public string NetworkProfile { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RoutingMode`<sup>Required</sup> <a name="RoutingMode" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.routingMode"></a>

```csharp
public string RoutingMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkConfig <a name="ComputeNetworkConfig" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object AutoCreateSubnetworks = null,
    object BgpAlwaysCompareMed = null,
    string BgpBestPathSelectionMode = null,
    string BgpInterRegionCost = null,
    object DeleteDefaultRoutesOnCreate = null,
    string Description = null,
    object EnableUlaInternalIpv6 = null,
    string Id = null,
    string InternalIpv6Range = null,
    double Mtu = null,
    string NetworkFirewallPolicyEnforcementOrder = null,
    string NetworkProfile = null,
    string Project = null,
    string RoutingMode = null,
    ComputeNetworkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.autoCreateSubnetworks">AutoCreateSubnetworks</a></code> | <code>object</code> | When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpAlwaysCompareMed">BgpAlwaysCompareMed</a></code> | <code>object</code> | Enables/disables the comparison of MED across routes with different Neighbor ASNs. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpBestPathSelectionMode">BgpBestPathSelectionMode</a></code> | <code>string</code> | The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"]. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpInterRegionCost">BgpInterRegionCost</a></code> | <code>string</code> | Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"]. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.deleteDefaultRoutesOnCreate">DeleteDefaultRoutesOnCreate</a></code> | <code>object</code> | If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. The resource must be recreated to modify this field. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.enableUlaInternalIpv6">EnableUlaInternalIpv6</a></code> | <code>object</code> | Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#id ComputeNetwork#id}. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.internalIpv6Range">InternalIpv6Range</a></code> | <code>string</code> | When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.mtu">Mtu</a></code> | <code>double</code> | Maximum Transmission Unit in bytes. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder">NetworkFirewallPolicyEnforcementOrder</a></code> | <code>string</code> | Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"]. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.networkProfile">NetworkProfile</a></code> | <code>string</code> | A full or partial URL of the network profile to apply to this network. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#project ComputeNetwork#project}. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.routingMode">RoutingMode</a></code> | <code>string</code> | The network-wide routing mode to use. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#name ComputeNetwork#name}

---

##### `AutoCreateSubnetworks`<sup>Optional</sup> <a name="AutoCreateSubnetworks" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.autoCreateSubnetworks"></a>

```csharp
public object AutoCreateSubnetworks { get; set; }
```

- *Type:* object

When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range.

When set to 'false', the network is created in "custom subnet mode" so
the user can explicitly connect subnetwork resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#auto_create_subnetworks ComputeNetwork#auto_create_subnetworks}

---

##### `BgpAlwaysCompareMed`<sup>Optional</sup> <a name="BgpAlwaysCompareMed" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpAlwaysCompareMed"></a>

```csharp
public object BgpAlwaysCompareMed { get; set; }
```

- *Type:* object

Enables/disables the comparison of MED across routes with different Neighbor ASNs.

This value can only be set if the --bgp-best-path-selection-mode is STANDARD

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#bgp_always_compare_med ComputeNetwork#bgp_always_compare_med}

---

##### `BgpBestPathSelectionMode`<sup>Optional</sup> <a name="BgpBestPathSelectionMode" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpBestPathSelectionMode"></a>

```csharp
public string BgpBestPathSelectionMode { get; set; }
```

- *Type:* string

The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#bgp_best_path_selection_mode ComputeNetwork#bgp_best_path_selection_mode}

---

##### `BgpInterRegionCost`<sup>Optional</sup> <a name="BgpInterRegionCost" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpInterRegionCost"></a>

```csharp
public string BgpInterRegionCost { get; set; }
```

- *Type:* string

Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#bgp_inter_region_cost ComputeNetwork#bgp_inter_region_cost}

---

##### `DeleteDefaultRoutesOnCreate`<sup>Optional</sup> <a name="DeleteDefaultRoutesOnCreate" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.deleteDefaultRoutesOnCreate"></a>

```csharp
public object DeleteDefaultRoutesOnCreate { get; set; }
```

- *Type:* object

If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#delete_default_routes_on_create ComputeNetwork#delete_default_routes_on_create}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. The resource must be recreated to modify this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#description ComputeNetwork#description}

---

##### `EnableUlaInternalIpv6`<sup>Optional</sup> <a name="EnableUlaInternalIpv6" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.enableUlaInternalIpv6"></a>

```csharp
public object EnableUlaInternalIpv6 { get; set; }
```

- *Type:* object

Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#enable_ula_internal_ipv6 ComputeNetwork#enable_ula_internal_ipv6}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#id ComputeNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternalIpv6Range`<sup>Optional</sup> <a name="InternalIpv6Range" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.internalIpv6Range"></a>

```csharp
public string InternalIpv6Range { get; set; }
```

- *Type:* string

When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20.

The input must be a
valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
fail if the speficied /48 is already in used by another resource.
If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#internal_ipv6_range ComputeNetwork#internal_ipv6_range}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Maximum Transmission Unit in bytes.

The default value is 1460 bytes.
The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
with an ICMP 'Fragmentation-Needed' message if the packets are routed to the Internet or other VPCs
with varying MTUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#mtu ComputeNetwork#mtu}

---

##### `NetworkFirewallPolicyEnforcementOrder`<sup>Optional</sup> <a name="NetworkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder"></a>

```csharp
public string NetworkFirewallPolicyEnforcementOrder { get; set; }
```

- *Type:* string

Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#network_firewall_policy_enforcement_order ComputeNetwork#network_firewall_policy_enforcement_order}

---

##### `NetworkProfile`<sup>Optional</sup> <a name="NetworkProfile" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.networkProfile"></a>

```csharp
public string NetworkProfile { get; set; }
```

- *Type:* string

A full or partial URL of the network profile to apply to this network.

This field can be set only at resource creation time. For example, the
following are valid URLs:

* https://www.googleapis.com/compute/v1/projects/{projectId}/global/networkProfiles/{network_profile_name}
* projects/{projectId}/global/networkProfiles/{network_profile_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#network_profile ComputeNetwork#network_profile}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#project ComputeNetwork#project}.

---

##### `RoutingMode`<sup>Optional</sup> <a name="RoutingMode" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.routingMode"></a>

```csharp
public string RoutingMode { get; set; }
```

- *Type:* string

The network-wide routing mode to use.

If set to 'REGIONAL', this
network's cloud routers will only advertise routes with subnetworks
of this network in the same region as the router. If set to 'GLOBAL',
this network's cloud routers will advertise routes with all
subnetworks of this network, across regions. Possible values: ["REGIONAL", "GLOBAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#routing_mode ComputeNetwork#routing_mode}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.timeouts"></a>

```csharp
public ComputeNetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#timeouts ComputeNetwork#timeouts}

---

### ComputeNetworkTimeouts <a name="ComputeNetworkTimeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#create ComputeNetwork#create}. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#delete ComputeNetwork#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#update ComputeNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#create ComputeNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#delete ComputeNetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_network#update ComputeNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkTimeoutsOutputReference <a name="ComputeNetworkTimeoutsOutputReference" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



