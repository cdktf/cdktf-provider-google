# `networkManagementConnectivityTest` Submodule <a name="`networkManagementConnectivityTest` Submodule" id="@cdktf/provider-google.networkManagementConnectivityTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementConnectivityTest <a name="NetworkManagementConnectivityTest" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test google_network_management_connectivity_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTest(Construct Scope, string Id, NetworkManagementConnectivityTestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig">NetworkManagementConnectivityTestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig">NetworkManagementConnectivityTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetBypassFirewallChecks">ResetBypassFirewallChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRelatedProjects">ResetRelatedProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRoundTrip">ResetRoundTrip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination"></a>

```csharp
private void PutDestination(NetworkManagementConnectivityTestDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource"></a>

```csharp
private void PutSource(NetworkManagementConnectivityTestSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkManagementConnectivityTestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>

---

##### `ResetBypassFirewallChecks` <a name="ResetBypassFirewallChecks" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetBypassFirewallChecks"></a>

```csharp
private void ResetBypassFirewallChecks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRelatedProjects` <a name="ResetRelatedProjects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRelatedProjects"></a>

```csharp
private void ResetRelatedProjects()
```

##### `ResetRoundTrip` <a name="ResetRoundTrip" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRoundTrip"></a>

```csharp
private void ResetRoundTrip()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkManagementConnectivityTest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkManagementConnectivityTest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkManagementConnectivityTest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkManagementConnectivityTest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagementConnectivityTest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagementConnectivityTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagementConnectivityTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference">NetworkManagementConnectivityTestDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference">NetworkManagementConnectivityTestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference">NetworkManagementConnectivityTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.bypassFirewallChecksInput">BypassFirewallChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjectsInput">RelatedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.roundTripInput">RoundTripInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.bypassFirewallChecks">BypassFirewallChecks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjects">RelatedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.roundTrip">RoundTrip</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destination"></a>

```csharp
public NetworkManagementConnectivityTestDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference">NetworkManagementConnectivityTestDestinationOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.source"></a>

```csharp
public NetworkManagementConnectivityTestSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference">NetworkManagementConnectivityTestSourceOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeouts"></a>

```csharp
public NetworkManagementConnectivityTestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference">NetworkManagementConnectivityTestTimeoutsOutputReference</a>

---

##### `BypassFirewallChecksInput`<sup>Optional</sup> <a name="BypassFirewallChecksInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.bypassFirewallChecksInput"></a>

```csharp
public object BypassFirewallChecksInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destinationInput"></a>

```csharp
public NetworkManagementConnectivityTestDestination DestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RelatedProjectsInput`<sup>Optional</sup> <a name="RelatedProjectsInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjectsInput"></a>

```csharp
public string[] RelatedProjectsInput { get; }
```

- *Type:* string[]

---

##### `RoundTripInput`<sup>Optional</sup> <a name="RoundTripInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.roundTripInput"></a>

```csharp
public object RoundTripInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.sourceInput"></a>

```csharp
public NetworkManagementConnectivityTestSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BypassFirewallChecks`<sup>Required</sup> <a name="BypassFirewallChecks" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.bypassFirewallChecks"></a>

```csharp
public object BypassFirewallChecks { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RelatedProjects`<sup>Required</sup> <a name="RelatedProjects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjects"></a>

```csharp
public string[] RelatedProjects { get; }
```

- *Type:* string[]

---

##### `RoundTrip`<sup>Required</sup> <a name="RoundTrip" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.roundTrip"></a>

```csharp
public object RoundTrip { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementConnectivityTestConfig <a name="NetworkManagementConnectivityTestConfig" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    NetworkManagementConnectivityTestDestination Destination,
    string Name,
    NetworkManagementConnectivityTestSource Source,
    object BypassFirewallChecks = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string Protocol = null,
    string[] RelatedProjects = null,
    object RoundTrip = null,
    NetworkManagementConnectivityTestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.bypassFirewallChecks">BypassFirewallChecks</a></code> | <code>object</code> | Whether the analysis should skip firewall checking. Default value is false. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.description">Description</a></code> | <code>string</code> | The user-supplied description of the Connectivity Test. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#id NetworkManagementConnectivityTest#id}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#project NetworkManagementConnectivityTest#project}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.protocol">Protocol</a></code> | <code>string</code> | IP Protocol of the test. When not provided, "TCP" is assumed. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.relatedProjects">RelatedProjects</a></code> | <code>string[]</code> | Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.roundTrip">RoundTrip</a></code> | <code>object</code> | Whether run analysis for the return path from destination to source. Default value is false. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.destination"></a>

```csharp
public NetworkManagementConnectivityTestDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#destination NetworkManagementConnectivityTest#destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#name NetworkManagementConnectivityTest#name}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.source"></a>

```csharp
public NetworkManagementConnectivityTestSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#source NetworkManagementConnectivityTest#source}

---

##### `BypassFirewallChecks`<sup>Optional</sup> <a name="BypassFirewallChecks" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.bypassFirewallChecks"></a>

```csharp
public object BypassFirewallChecks { get; set; }
```

- *Type:* object

Whether the analysis should skip firewall checking. Default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#bypass_firewall_checks NetworkManagementConnectivityTest#bypass_firewall_checks}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#description NetworkManagementConnectivityTest#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#id NetworkManagementConnectivityTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#labels NetworkManagementConnectivityTest#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#project NetworkManagementConnectivityTest#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

IP Protocol of the test. When not provided, "TCP" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#protocol NetworkManagementConnectivityTest#protocol}

---

##### `RelatedProjects`<sup>Optional</sup> <a name="RelatedProjects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.relatedProjects"></a>

```csharp
public string[] RelatedProjects { get; set; }
```

- *Type:* string[]

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#related_projects NetworkManagementConnectivityTest#related_projects}

---

##### `RoundTrip`<sup>Optional</sup> <a name="RoundTrip" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.roundTrip"></a>

```csharp
public object RoundTrip { get; set; }
```

- *Type:* object

Whether run analysis for the return path from destination to source. Default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#round_trip NetworkManagementConnectivityTest#round_trip}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.timeouts"></a>

```csharp
public NetworkManagementConnectivityTestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#timeouts NetworkManagementConnectivityTest#timeouts}

---

### NetworkManagementConnectivityTestDestination <a name="NetworkManagementConnectivityTestDestination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestDestination {
    string CloudSqlInstance = null,
    string ForwardingRule = null,
    string Fqdn = null,
    string GkeMasterCluster = null,
    string Instance = null,
    string IpAddress = null,
    string Network = null,
    double Port = null,
    string ProjectId = null,
    string RedisCluster = null,
    string RedisInstance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>string</code> | A Cloud SQL instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints, and Protocol Forwarding. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.fqdn">Fqdn</a></code> | <code>string</code> | A DNS endpoint of Google Kubernetes Engine cluster control plane. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>string</code> | A cluster URI for Google Kubernetes Engine cluster control plane. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.instance">Instance</a></code> | <code>string</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.ipAddress">IpAddress</a></code> | <code>string</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.network">Network</a></code> | <code>string</code> | A VPC network URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.port">Port</a></code> | <code>double</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.projectId">ProjectId</a></code> | <code>string</code> | Project ID where the endpoint is located. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.redisCluster">RedisCluster</a></code> | <code>string</code> | A Redis Cluster URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.redisInstance">RedisInstance</a></code> | <code>string</code> | A Redis Instance URI. |

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.cloudSqlInstance"></a>

```csharp
public string CloudSqlInstance { get; set; }
```

- *Type:* string

A Cloud SQL instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#cloud_sql_instance NetworkManagementConnectivityTest#cloud_sql_instance}

---

##### `ForwardingRule`<sup>Optional</sup> <a name="ForwardingRule" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; set; }
```

- *Type:* string

Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints, and Protocol Forwarding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#forwarding_rule NetworkManagementConnectivityTest#forwarding_rule}

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

A DNS endpoint of Google Kubernetes Engine cluster control plane.

Requires gke_master_cluster to be set, can't be used simultaneoulsly with
ip_address or network. Applicable only to destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#fqdn NetworkManagementConnectivityTest#fqdn}

---

##### `GkeMasterCluster`<sup>Optional</sup> <a name="GkeMasterCluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.gkeMasterCluster"></a>

```csharp
public string GkeMasterCluster { get; set; }
```

- *Type:* string

A cluster URI for Google Kubernetes Engine cluster control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#gke_master_cluster NetworkManagementConnectivityTest#gke_master_cluster}

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#instance NetworkManagementConnectivityTest#instance}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The IP address of the endpoint, which can be an external or internal IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#ip_address NetworkManagementConnectivityTest#ip_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

A VPC network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#network NetworkManagementConnectivityTest#network}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#port NetworkManagementConnectivityTest#port}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Project ID where the endpoint is located.

The project ID can be derived from the URI if you provide a endpoint or
network URI.
The following are two cases where you may need to provide the project ID:

1. Only the IP address is specified, and the IP address is within a Google
   Cloud project.
2. When you are using Shared VPC and the IP address that you provide is
   from the service project. In this case, the network that the IP address
   resides in is defined in the host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#project_id NetworkManagementConnectivityTest#project_id}

---

##### `RedisCluster`<sup>Optional</sup> <a name="RedisCluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.redisCluster"></a>

```csharp
public string RedisCluster { get; set; }
```

- *Type:* string

A Redis Cluster URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#redis_cluster NetworkManagementConnectivityTest#redis_cluster}

---

##### `RedisInstance`<sup>Optional</sup> <a name="RedisInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.redisInstance"></a>

```csharp
public string RedisInstance { get; set; }
```

- *Type:* string

A Redis Instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#redis_instance NetworkManagementConnectivityTest#redis_instance}

---

### NetworkManagementConnectivityTestSource <a name="NetworkManagementConnectivityTestSource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestSource {
    NetworkManagementConnectivityTestSourceAppEngineVersion AppEngineVersion = null,
    NetworkManagementConnectivityTestSourceCloudFunction CloudFunction = null,
    NetworkManagementConnectivityTestSourceCloudRunRevision CloudRunRevision = null,
    string CloudSqlInstance = null,
    string GkeMasterCluster = null,
    string Instance = null,
    string IpAddress = null,
    string Network = null,
    string NetworkType = null,
    double Port = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.appEngineVersion">AppEngineVersion</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a></code> | app_engine_version block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudFunction">CloudFunction</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudRunRevision">CloudRunRevision</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a></code> | cloud_run_revision block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>string</code> | A Cloud SQL instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>string</code> | A cluster URI for Google Kubernetes Engine cluster control plane. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.instance">Instance</a></code> | <code>string</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.ipAddress">IpAddress</a></code> | <code>string</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.network">Network</a></code> | <code>string</code> | A VPC network URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.networkType">NetworkType</a></code> | <code>string</code> | Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"]. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.port">Port</a></code> | <code>double</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.projectId">ProjectId</a></code> | <code>string</code> | Project ID where the endpoint is located. |

---

##### `AppEngineVersion`<sup>Optional</sup> <a name="AppEngineVersion" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.appEngineVersion"></a>

```csharp
public NetworkManagementConnectivityTestSourceAppEngineVersion AppEngineVersion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a>

app_engine_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#app_engine_version NetworkManagementConnectivityTest#app_engine_version}

---

##### `CloudFunction`<sup>Optional</sup> <a name="CloudFunction" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudFunction"></a>

```csharp
public NetworkManagementConnectivityTestSourceCloudFunction CloudFunction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#cloud_function NetworkManagementConnectivityTest#cloud_function}

---

##### `CloudRunRevision`<sup>Optional</sup> <a name="CloudRunRevision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudRunRevision"></a>

```csharp
public NetworkManagementConnectivityTestSourceCloudRunRevision CloudRunRevision { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a>

cloud_run_revision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#cloud_run_revision NetworkManagementConnectivityTest#cloud_run_revision}

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudSqlInstance"></a>

```csharp
public string CloudSqlInstance { get; set; }
```

- *Type:* string

A Cloud SQL instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#cloud_sql_instance NetworkManagementConnectivityTest#cloud_sql_instance}

---

##### `GkeMasterCluster`<sup>Optional</sup> <a name="GkeMasterCluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.gkeMasterCluster"></a>

```csharp
public string GkeMasterCluster { get; set; }
```

- *Type:* string

A cluster URI for Google Kubernetes Engine cluster control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#gke_master_cluster NetworkManagementConnectivityTest#gke_master_cluster}

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#instance NetworkManagementConnectivityTest#instance}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The IP address of the endpoint, which can be an external or internal IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#ip_address NetworkManagementConnectivityTest#ip_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

A VPC network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#network NetworkManagementConnectivityTest#network}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#network_type NetworkManagementConnectivityTest#network_type}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#port NetworkManagementConnectivityTest#port}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Project ID where the endpoint is located.

The project ID can be derived from the URI if you provide a endpoint or
network URI.
The following are two cases where you may need to provide the project ID:

1. Only the IP address is specified, and the IP address is within a Google
   Cloud project.
2. When you are using Shared VPC and the IP address that you provide is
   from the service project. In this case, the network that the IP address
   resides in is defined in the host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#project_id NetworkManagementConnectivityTest#project_id}

---

### NetworkManagementConnectivityTestSourceAppEngineVersion <a name="NetworkManagementConnectivityTestSourceAppEngineVersion" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestSourceAppEngineVersion {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion.property.uri">Uri</a></code> | <code>string</code> | An App Engine service version name. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

An App Engine service version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#uri NetworkManagementConnectivityTest#uri}

---

### NetworkManagementConnectivityTestSourceCloudFunction <a name="NetworkManagementConnectivityTestSourceCloudFunction" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestSourceCloudFunction {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction.property.uri">Uri</a></code> | <code>string</code> | A Cloud Function name. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

A Cloud Function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#uri NetworkManagementConnectivityTest#uri}

---

### NetworkManagementConnectivityTestSourceCloudRunRevision <a name="NetworkManagementConnectivityTestSourceCloudRunRevision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestSourceCloudRunRevision {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision.property.uri">Uri</a></code> | <code>string</code> | A Cloud Run revision URI. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

A Cloud Run revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#uri NetworkManagementConnectivityTest#uri}

---

### NetworkManagementConnectivityTestTimeouts <a name="NetworkManagementConnectivityTestTimeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#create NetworkManagementConnectivityTest#create}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#delete NetworkManagementConnectivityTest#delete}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#update NetworkManagementConnectivityTest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#create NetworkManagementConnectivityTest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#delete NetworkManagementConnectivityTest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_management_connectivity_test#update NetworkManagementConnectivityTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementConnectivityTestDestinationOutputReference <a name="NetworkManagementConnectivityTestDestinationOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetForwardingRule">ResetForwardingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetGkeMasterCluster">ResetGkeMasterCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetRedisCluster">ResetRedisCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetRedisInstance">ResetRedisInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetCloudSqlInstance"></a>

```csharp
private void ResetCloudSqlInstance()
```

##### `ResetForwardingRule` <a name="ResetForwardingRule" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetForwardingRule"></a>

```csharp
private void ResetForwardingRule()
```

##### `ResetFqdn` <a name="ResetFqdn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetFqdn"></a>

```csharp
private void ResetFqdn()
```

##### `ResetGkeMasterCluster` <a name="ResetGkeMasterCluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetGkeMasterCluster"></a>

```csharp
private void ResetGkeMasterCluster()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRedisCluster` <a name="ResetRedisCluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetRedisCluster"></a>

```csharp
private void ResetRedisCluster()
```

##### `ResetRedisInstance` <a name="ResetRedisInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetRedisInstance"></a>

```csharp
private void ResetRedisInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterClusterInput">GkeMasterClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisClusterInput">RedisClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisInstanceInput">RedisInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisCluster">RedisCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisInstance">RedisInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstanceInput"></a>

```csharp
public string CloudSqlInstanceInput { get; }
```

- *Type:* string

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRuleInput"></a>

```csharp
public string ForwardingRuleInput { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `GkeMasterClusterInput`<sup>Optional</sup> <a name="GkeMasterClusterInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterClusterInput"></a>

```csharp
public string GkeMasterClusterInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RedisClusterInput`<sup>Optional</sup> <a name="RedisClusterInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisClusterInput"></a>

```csharp
public string RedisClusterInput { get; }
```

- *Type:* string

---

##### `RedisInstanceInput`<sup>Optional</sup> <a name="RedisInstanceInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisInstanceInput"></a>

```csharp
public string RedisInstanceInput { get; }
```

- *Type:* string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstance"></a>

```csharp
public string CloudSqlInstance { get; }
```

- *Type:* string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `GkeMasterCluster`<sup>Required</sup> <a name="GkeMasterCluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterCluster"></a>

```csharp
public string GkeMasterCluster { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RedisCluster`<sup>Required</sup> <a name="RedisCluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisCluster"></a>

```csharp
public string RedisCluster { get; }
```

- *Type:* string

---

##### `RedisInstance`<sup>Required</sup> <a name="RedisInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisInstance"></a>

```csharp
public string RedisInstance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.internalValue"></a>

```csharp
public NetworkManagementConnectivityTestDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

---


### NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference <a name="NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.internalValue"></a>

```csharp
public NetworkManagementConnectivityTestSourceAppEngineVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a>

---


### NetworkManagementConnectivityTestSourceCloudFunctionOutputReference <a name="NetworkManagementConnectivityTestSourceCloudFunctionOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestSourceCloudFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.internalValue"></a>

```csharp
public NetworkManagementConnectivityTestSourceCloudFunction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a>

---


### NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference <a name="NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.internalValue"></a>

```csharp
public NetworkManagementConnectivityTestSourceCloudRunRevision InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a>

---


### NetworkManagementConnectivityTestSourceOutputReference <a name="NetworkManagementConnectivityTestSourceOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putAppEngineVersion">PutAppEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudFunction">PutCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudRunRevision">PutCloudRunRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetAppEngineVersion">ResetAppEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudFunction">ResetCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudRunRevision">ResetCloudRunRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetGkeMasterCluster">ResetGkeMasterCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppEngineVersion` <a name="PutAppEngineVersion" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putAppEngineVersion"></a>

```csharp
private void PutAppEngineVersion(NetworkManagementConnectivityTestSourceAppEngineVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putAppEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a>

---

##### `PutCloudFunction` <a name="PutCloudFunction" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudFunction"></a>

```csharp
private void PutCloudFunction(NetworkManagementConnectivityTestSourceCloudFunction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a>

---

##### `PutCloudRunRevision` <a name="PutCloudRunRevision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudRunRevision"></a>

```csharp
private void PutCloudRunRevision(NetworkManagementConnectivityTestSourceCloudRunRevision Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudRunRevision.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a>

---

##### `ResetAppEngineVersion` <a name="ResetAppEngineVersion" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetAppEngineVersion"></a>

```csharp
private void ResetAppEngineVersion()
```

##### `ResetCloudFunction` <a name="ResetCloudFunction" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudFunction"></a>

```csharp
private void ResetCloudFunction()
```

##### `ResetCloudRunRevision` <a name="ResetCloudRunRevision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudRunRevision"></a>

```csharp
private void ResetCloudRunRevision()
```

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudSqlInstance"></a>

```csharp
private void ResetCloudSqlInstance()
```

##### `ResetGkeMasterCluster` <a name="ResetGkeMasterCluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetGkeMasterCluster"></a>

```csharp
private void ResetGkeMasterCluster()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersion">AppEngineVersion</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference">NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudFunction">CloudFunction</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference">NetworkManagementConnectivityTestSourceCloudFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevision">CloudRunRevision</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference">NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersionInput">AppEngineVersionInput</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudFunctionInput">CloudFunctionInput</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevisionInput">CloudRunRevisionInput</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterClusterInput">GkeMasterClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppEngineVersion`<sup>Required</sup> <a name="AppEngineVersion" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersion"></a>

```csharp
public NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference AppEngineVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference">NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference</a>

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudFunction"></a>

```csharp
public NetworkManagementConnectivityTestSourceCloudFunctionOutputReference CloudFunction { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference">NetworkManagementConnectivityTestSourceCloudFunctionOutputReference</a>

---

##### `CloudRunRevision`<sup>Required</sup> <a name="CloudRunRevision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevision"></a>

```csharp
public NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference CloudRunRevision { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference">NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference</a>

---

##### `AppEngineVersionInput`<sup>Optional</sup> <a name="AppEngineVersionInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersionInput"></a>

```csharp
public NetworkManagementConnectivityTestSourceAppEngineVersion AppEngineVersionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a>

---

##### `CloudFunctionInput`<sup>Optional</sup> <a name="CloudFunctionInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudFunctionInput"></a>

```csharp
public NetworkManagementConnectivityTestSourceCloudFunction CloudFunctionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a>

---

##### `CloudRunRevisionInput`<sup>Optional</sup> <a name="CloudRunRevisionInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevisionInput"></a>

```csharp
public NetworkManagementConnectivityTestSourceCloudRunRevision CloudRunRevisionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a>

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstanceInput"></a>

```csharp
public string CloudSqlInstanceInput { get; }
```

- *Type:* string

---

##### `GkeMasterClusterInput`<sup>Optional</sup> <a name="GkeMasterClusterInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterClusterInput"></a>

```csharp
public string GkeMasterClusterInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstance"></a>

```csharp
public string CloudSqlInstance { get; }
```

- *Type:* string

---

##### `GkeMasterCluster`<sup>Required</sup> <a name="GkeMasterCluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterCluster"></a>

```csharp
public string GkeMasterCluster { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.internalValue"></a>

```csharp
public NetworkManagementConnectivityTestSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

---


### NetworkManagementConnectivityTestTimeoutsOutputReference <a name="NetworkManagementConnectivityTestTimeoutsOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkManagementConnectivityTestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



