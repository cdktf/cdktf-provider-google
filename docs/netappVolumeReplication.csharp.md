# `netappVolumeReplication` Submodule <a name="`netappVolumeReplication` Submodule" id="@cdktf/provider-google.netappVolumeReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeReplication <a name="NetappVolumeReplication" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication google_netapp_volume_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeReplication(Construct Scope, string Id, NetappVolumeReplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig">NetappVolumeReplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig">NetappVolumeReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters">PutDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDeleteDestinationVolume">ResetDeleteDestinationVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDestinationVolumeParameters">ResetDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetForceStopping">ResetForceStopping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetReplicationEnabled">ResetReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetWaitForMirror">ResetWaitForMirror</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationVolumeParameters` <a name="PutDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters"></a>

```csharp
private void PutDestinationVolumeParameters(NetappVolumeReplicationDestinationVolumeParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts"></a>

```csharp
private void PutTimeouts(NetappVolumeReplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

---

##### `ResetDeleteDestinationVolume` <a name="ResetDeleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDeleteDestinationVolume"></a>

```csharp
private void ResetDeleteDestinationVolume()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationVolumeParameters` <a name="ResetDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDestinationVolumeParameters"></a>

```csharp
private void ResetDestinationVolumeParameters()
```

##### `ResetForceStopping` <a name="ResetForceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetForceStopping"></a>

```csharp
private void ResetForceStopping()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReplicationEnabled` <a name="ResetReplicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetReplicationEnabled"></a>

```csharp
private void ResetReplicationEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWaitForMirror` <a name="ResetWaitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetWaitForMirror"></a>

```csharp
private void ResetWaitForMirror()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolumeReplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetappVolumeReplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetappVolumeReplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetappVolumeReplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetappVolumeReplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetappVolumeReplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolumeReplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolumeReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolume">DestinationVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParameters">DestinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference">NetappVolumeReplicationDestinationVolumeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.healthy">Healthy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.mirrorState">MirrorState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.sourceVolume">SourceVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.stateDetails">StateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference">NetappVolumeReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.transferStats">TransferStats</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList">NetappVolumeReplicationTransferStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolumeInput">DeleteDestinationVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParametersInput">DestinationVolumeParametersInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStoppingInput">ForceStoppingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabledInput">ReplicationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationScheduleInput">ReplicationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeNameInput">VolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirrorInput">WaitForMirrorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolume">DeleteDestinationVolume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStopping">ForceStopping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabled">ReplicationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationSchedule">ReplicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirror">WaitForMirror</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DestinationVolume`<sup>Required</sup> <a name="DestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolume"></a>

```csharp
public string DestinationVolume { get; }
```

- *Type:* string

---

##### `DestinationVolumeParameters`<sup>Required</sup> <a name="DestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParameters"></a>

```csharp
public NetappVolumeReplicationDestinationVolumeParametersOutputReference DestinationVolumeParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference">NetappVolumeReplicationDestinationVolumeParametersOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.healthy"></a>

```csharp
public IResolvable Healthy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MirrorState`<sup>Required</sup> <a name="MirrorState" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.mirrorState"></a>

```csharp
public string MirrorState { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SourceVolume`<sup>Required</sup> <a name="SourceVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.sourceVolume"></a>

```csharp
public string SourceVolume { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.stateDetails"></a>

```csharp
public string StateDetails { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeouts"></a>

```csharp
public NetappVolumeReplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference">NetappVolumeReplicationTimeoutsOutputReference</a>

---

##### `TransferStats`<sup>Required</sup> <a name="TransferStats" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.transferStats"></a>

```csharp
public NetappVolumeReplicationTransferStatsList TransferStats { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList">NetappVolumeReplicationTransferStatsList</a>

---

##### `DeleteDestinationVolumeInput`<sup>Optional</sup> <a name="DeleteDestinationVolumeInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolumeInput"></a>

```csharp
public object DeleteDestinationVolumeInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationVolumeParametersInput`<sup>Optional</sup> <a name="DestinationVolumeParametersInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParametersInput"></a>

```csharp
public NetappVolumeReplicationDestinationVolumeParameters DestinationVolumeParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `ForceStoppingInput`<sup>Optional</sup> <a name="ForceStoppingInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStoppingInput"></a>

```csharp
public object ForceStoppingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReplicationEnabledInput`<sup>Optional</sup> <a name="ReplicationEnabledInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabledInput"></a>

```csharp
public object ReplicationEnabledInput { get; }
```

- *Type:* object

---

##### `ReplicationScheduleInput`<sup>Optional</sup> <a name="ReplicationScheduleInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationScheduleInput"></a>

```csharp
public string ReplicationScheduleInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeNameInput"></a>

```csharp
public string VolumeNameInput { get; }
```

- *Type:* string

---

##### `WaitForMirrorInput`<sup>Optional</sup> <a name="WaitForMirrorInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirrorInput"></a>

```csharp
public object WaitForMirrorInput { get; }
```

- *Type:* object

---

##### `DeleteDestinationVolume`<sup>Required</sup> <a name="DeleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolume"></a>

```csharp
public object DeleteDestinationVolume { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForceStopping`<sup>Required</sup> <a name="ForceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStopping"></a>

```csharp
public object ForceStopping { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReplicationEnabled`<sup>Required</sup> <a name="ReplicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabled"></a>

```csharp
public object ReplicationEnabled { get; }
```

- *Type:* object

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationSchedule"></a>

```csharp
public string ReplicationSchedule { get; }
```

- *Type:* string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `WaitForMirror`<sup>Required</sup> <a name="WaitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirror"></a>

```csharp
public object WaitForMirror { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeReplicationConfig <a name="NetappVolumeReplicationConfig" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeReplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ReplicationSchedule,
    string VolumeName,
    object DeleteDestinationVolume = null,
    string Description = null,
    NetappVolumeReplicationDestinationVolumeParameters DestinationVolumeParameters = null,
    object ForceStopping = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    object ReplicationEnabled = null,
    NetappVolumeReplicationTimeouts Timeouts = null,
    object WaitForMirror = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.location">Location</a></code> | <code>string</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.name">Name</a></code> | <code>string</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationSchedule">ReplicationSchedule</a></code> | <code>string</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.volumeName">VolumeName</a></code> | <code>string</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.deleteDestinationVolume">DeleteDestinationVolume</a></code> | <code>object</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.description">Description</a></code> | <code>string</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.destinationVolumeParameters">DestinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forceStopping">ForceStopping</a></code> | <code>object</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationEnabled">ReplicationEnabled</a></code> | <code>object</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.waitForMirror">WaitForMirror</a></code> | <code>object</code> | Replication resource state is independent of mirror_state. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#location NetappVolumeReplication#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#name NetappVolumeReplication#name}

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationSchedule"></a>

```csharp
public string ReplicationSchedule { get; set; }
```

- *Type:* string

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#replication_schedule NetappVolumeReplication#replication_schedule}

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.volumeName"></a>

```csharp
public string VolumeName { get; set; }
```

- *Type:* string

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#volume_name NetappVolumeReplication#volume_name}

---

##### `DeleteDestinationVolume`<sup>Optional</sup> <a name="DeleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.deleteDestinationVolume"></a>

```csharp
public object DeleteDestinationVolume { get; set; }
```

- *Type:* object

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#delete_destination_volume NetappVolumeReplication#delete_destination_volume}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `DestinationVolumeParameters`<sup>Optional</sup> <a name="DestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.destinationVolumeParameters"></a>

```csharp
public NetappVolumeReplicationDestinationVolumeParameters DestinationVolumeParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#destination_volume_parameters NetappVolumeReplication#destination_volume_parameters}

---

##### `ForceStopping`<sup>Optional</sup> <a name="ForceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forceStopping"></a>

```csharp
public object ForceStopping { get; set; }
```

- *Type:* object

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#force_stopping NetappVolumeReplication#force_stopping}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#labels NetappVolumeReplication#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}.

---

##### `ReplicationEnabled`<sup>Optional</sup> <a name="ReplicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationEnabled"></a>

```csharp
public object ReplicationEnabled { get; set; }
```

- *Type:* object

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#replication_enabled NetappVolumeReplication#replication_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.timeouts"></a>

```csharp
public NetappVolumeReplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#timeouts NetappVolumeReplication#timeouts}

---

##### `WaitForMirror`<sup>Optional</sup> <a name="WaitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.waitForMirror"></a>

```csharp
public object WaitForMirror { get; set; }
```

- *Type:* object

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#wait_for_mirror NetappVolumeReplication#wait_for_mirror}

---

### NetappVolumeReplicationDestinationVolumeParameters <a name="NetappVolumeReplicationDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeReplicationDestinationVolumeParameters {
    string StoragePool,
    string Description = null,
    string ShareName = null,
    string VolumeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.storagePool">StoragePool</a></code> | <code>string</code> | Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.description">Description</a></code> | <code>string</code> | Description for the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.shareName">ShareName</a></code> | <code>string</code> | Share name for destination volume. If not specified, name of source volume's share name will be used. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.volumeId">VolumeId</a></code> | <code>string</code> | Name for the destination volume to be created. |

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.storagePool"></a>

```csharp
public string StoragePool { get; set; }
```

- *Type:* string

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#storage_pool NetappVolumeReplication#storage_pool}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#share_name NetappVolumeReplication#share_name}

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#volume_id NetappVolumeReplication#volume_id}

---

### NetappVolumeReplicationTimeouts <a name="NetappVolumeReplicationTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeReplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}.

---

### NetappVolumeReplicationTransferStats <a name="NetappVolumeReplicationTransferStats" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeReplicationTransferStats {

};
```


## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeReplicationDestinationVolumeParametersOutputReference <a name="NetappVolumeReplicationDestinationVolumeParametersOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeReplicationDestinationVolumeParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId">ResetVolumeId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName"></a>

```csharp
private void ResetShareName()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId"></a>

```csharp
private void ResetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput">StoragePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool">StoragePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput"></a>

```csharp
public string StoragePoolInput { get; }
```

- *Type:* string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool"></a>

```csharp
public string StoragePool { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeReplicationDestinationVolumeParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---


### NetappVolumeReplicationTimeoutsOutputReference <a name="NetappVolumeReplicationTimeoutsOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeReplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetappVolumeReplicationTransferStatsList <a name="NetappVolumeReplicationTransferStatsList" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeReplicationTransferStatsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get"></a>

```csharp
private NetappVolumeReplicationTransferStatsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetappVolumeReplicationTransferStatsOutputReference <a name="NetappVolumeReplicationTransferStatsOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetappVolumeReplicationTransferStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lagDuration">LagDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes">LastTransferBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration">LastTransferDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime">LastTransferEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError">LastTransferError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration">TotalTransferDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.transferBytes">TransferBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats">NetappVolumeReplicationTransferStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LagDuration`<sup>Required</sup> <a name="LagDuration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lagDuration"></a>

```csharp
public string LagDuration { get; }
```

- *Type:* string

---

##### `LastTransferBytes`<sup>Required</sup> <a name="LastTransferBytes" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes"></a>

```csharp
public string LastTransferBytes { get; }
```

- *Type:* string

---

##### `LastTransferDuration`<sup>Required</sup> <a name="LastTransferDuration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration"></a>

```csharp
public string LastTransferDuration { get; }
```

- *Type:* string

---

##### `LastTransferEndTime`<sup>Required</sup> <a name="LastTransferEndTime" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime"></a>

```csharp
public string LastTransferEndTime { get; }
```

- *Type:* string

---

##### `LastTransferError`<sup>Required</sup> <a name="LastTransferError" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError"></a>

```csharp
public string LastTransferError { get; }
```

- *Type:* string

---

##### `TotalTransferDuration`<sup>Required</sup> <a name="TotalTransferDuration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration"></a>

```csharp
public string TotalTransferDuration { get; }
```

- *Type:* string

---

##### `TransferBytes`<sup>Required</sup> <a name="TransferBytes" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.transferBytes"></a>

```csharp
public string TransferBytes { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeReplicationTransferStats InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats">NetappVolumeReplicationTransferStats</a>

---



