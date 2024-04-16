# `computeRegionNetworkFirewallPolicyAssociation` Submodule <a name="`computeRegionNetworkFirewallPolicyAssociation` Submodule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkFirewallPolicyAssociation <a name="ComputeRegionNetworkFirewallPolicyAssociation" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association google_compute_region_network_firewall_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyAssociation(Construct Scope, string Id, ComputeRegionNetworkFirewallPolicyAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig">ComputeRegionNetworkFirewallPolicyAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig">ComputeRegionNetworkFirewallPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionNetworkFirewallPolicyAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionNetworkFirewallPolicyAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionNetworkFirewallPolicyAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionNetworkFirewallPolicyAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionNetworkFirewallPolicyAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRegionNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionNetworkFirewallPolicyAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionNetworkFirewallPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkFirewallPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTargetInput">AttachmentTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTarget">AttachmentTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicy">FirewallPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeouts"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference</a>

---

##### `AttachmentTargetInput`<sup>Optional</sup> <a name="AttachmentTargetInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTargetInput"></a>

```csharp
public string AttachmentTargetInput { get; }
```

- *Type:* string

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicyInput"></a>

```csharp
public string FirewallPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AttachmentTarget`<sup>Required</sup> <a name="AttachmentTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTarget"></a>

```csharp
public string AttachmentTarget { get; }
```

- *Type:* string

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicy"></a>

```csharp
public string FirewallPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkFirewallPolicyAssociationConfig <a name="ComputeRegionNetworkFirewallPolicyAssociationConfig" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AttachmentTarget,
    string FirewallPolicy,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null,
    ComputeRegionNetworkFirewallPolicyAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.attachmentTarget">AttachmentTarget</a></code> | <code>string</code> | The target that the firewall policy is attached to. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code>string</code> | The firewall policy ID of the association. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.name">Name</a></code> | <code>string</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#id ComputeRegionNetworkFirewallPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.region">Region</a></code> | <code>string</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AttachmentTarget`<sup>Required</sup> <a name="AttachmentTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.attachmentTarget"></a>

```csharp
public string AttachmentTarget { get; set; }
```

- *Type:* string

The target that the firewall policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#attachment_target ComputeRegionNetworkFirewallPolicyAssociation#attachment_target}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.firewallPolicy"></a>

```csharp
public string FirewallPolicy { get; set; }
```

- *Type:* string

The firewall policy ID of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#firewall_policy ComputeRegionNetworkFirewallPolicyAssociation#firewall_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#name ComputeRegionNetworkFirewallPolicyAssociation#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#id ComputeRegionNetworkFirewallPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#project ComputeRegionNetworkFirewallPolicyAssociation#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#region ComputeRegionNetworkFirewallPolicyAssociation#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.timeouts"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#timeouts ComputeRegionNetworkFirewallPolicyAssociation#timeouts}

---

### ComputeRegionNetworkFirewallPolicyAssociationTimeouts <a name="ComputeRegionNetworkFirewallPolicyAssociationTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyAssociationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#create ComputeRegionNetworkFirewallPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#delete ComputeRegionNetworkFirewallPolicyAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#create ComputeRegionNetworkFirewallPolicyAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_region_network_firewall_policy_association#delete ComputeRegionNetworkFirewallPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference <a name="ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



