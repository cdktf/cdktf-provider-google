# `computePacketMirroring` Submodule <a name="`computePacketMirroring` Submodule" id="@cdktf/provider-google.computePacketMirroring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePacketMirroring <a name="ComputePacketMirroring" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring google_compute_packet_mirroring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroring(Construct Scope, string Id, ComputePacketMirroringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig">ComputePacketMirroringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig">ComputePacketMirroringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb">PutCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources">PutMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCollectorIlb` <a name="PutCollectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb"></a>

```csharp
private void PutCollectorIlb(ComputePacketMirroringCollectorIlb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter"></a>

```csharp
private void PutFilter(ComputePacketMirroringFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---

##### `PutMirroredResources` <a name="PutMirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources"></a>

```csharp
private void PutMirroredResources(ComputePacketMirroringMirroredResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork"></a>

```csharp
private void PutNetwork(ComputePacketMirroringNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputePacketMirroringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputePacketMirroring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePacketMirroring.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePacketMirroring.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePacketMirroring.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePacketMirroring.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputePacketMirroring resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputePacketMirroring to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputePacketMirroring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputePacketMirroring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlb">CollectorIlb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference">ComputePacketMirroringCollectorIlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference">ComputePacketMirroringFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResources">MirroredResources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference">ComputePacketMirroringMirroredResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference">ComputePacketMirroringNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference">ComputePacketMirroringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlbInput">CollectorIlbInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResourcesInput">MirroredResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CollectorIlb`<sup>Required</sup> <a name="CollectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlb"></a>

```csharp
public ComputePacketMirroringCollectorIlbOutputReference CollectorIlb { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference">ComputePacketMirroringCollectorIlbOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filter"></a>

```csharp
public ComputePacketMirroringFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference">ComputePacketMirroringFilterOutputReference</a>

---

##### `MirroredResources`<sup>Required</sup> <a name="MirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResources"></a>

```csharp
public ComputePacketMirroringMirroredResourcesOutputReference MirroredResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference">ComputePacketMirroringMirroredResourcesOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.network"></a>

```csharp
public ComputePacketMirroringNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference">ComputePacketMirroringNetworkOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeouts"></a>

```csharp
public ComputePacketMirroringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference">ComputePacketMirroringTimeoutsOutputReference</a>

---

##### `CollectorIlbInput`<sup>Optional</sup> <a name="CollectorIlbInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlbInput"></a>

```csharp
public ComputePacketMirroringCollectorIlb CollectorIlbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filterInput"></a>

```csharp
public ComputePacketMirroringFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MirroredResourcesInput`<sup>Optional</sup> <a name="MirroredResourcesInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResourcesInput"></a>

```csharp
public ComputePacketMirroringMirroredResources MirroredResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.networkInput"></a>

```csharp
public ComputePacketMirroringNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePacketMirroringCollectorIlb <a name="ComputePacketMirroringCollectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringCollectorIlb {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.property.url">Url</a></code> | <code>string</code> | The URL of the forwarding rule. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringConfig <a name="ComputePacketMirroringConfig" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ComputePacketMirroringCollectorIlb CollectorIlb,
    ComputePacketMirroringMirroredResources MirroredResources,
    string Name,
    ComputePacketMirroringNetwork Network,
    string Description = null,
    ComputePacketMirroringFilter Filter = null,
    string Id = null,
    double Priority = null,
    string Project = null,
    string Region = null,
    ComputePacketMirroringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.collectorIlb">CollectorIlb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | collector_ilb block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.mirroredResources">MirroredResources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | mirrored_resources block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.name">Name</a></code> | <code>string</code> | The name of the packet mirroring rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.priority">Priority</a></code> | <code>double</code> | Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.region">Region</a></code> | <code>string</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CollectorIlb`<sup>Required</sup> <a name="CollectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.collectorIlb"></a>

```csharp
public ComputePacketMirroringCollectorIlb CollectorIlb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

collector_ilb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#collector_ilb ComputePacketMirroring#collector_ilb}

---

##### `MirroredResources`<sup>Required</sup> <a name="MirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.mirroredResources"></a>

```csharp
public ComputePacketMirroringMirroredResources MirroredResources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

mirrored_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#mirrored_resources ComputePacketMirroring#mirrored_resources}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the packet mirroring rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#name ComputePacketMirroring#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.network"></a>

```csharp
public ComputePacketMirroringNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#network ComputePacketMirroring#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#description ComputePacketMirroring#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.filter"></a>

```csharp
public ComputePacketMirroringFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#filter ComputePacketMirroring#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#priority ComputePacketMirroring#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#region ComputePacketMirroring#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.timeouts"></a>

```csharp
public ComputePacketMirroringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#timeouts ComputePacketMirroring#timeouts}

---

### ComputePacketMirroringFilter <a name="ComputePacketMirroringFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringFilter {
    string[] CidrRanges = null,
    string Direction = null,
    string[] IpProtocols = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.cidrRanges">CidrRanges</a></code> | <code>string[]</code> | IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.direction">Direction</a></code> | <code>string</code> | Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"]. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.ipProtocols">IpProtocols</a></code> | <code>string[]</code> | Possible IP protocols including tcp, udp, icmp and esp. |

---

##### `CidrRanges`<sup>Optional</sup> <a name="CidrRanges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.cidrRanges"></a>

```csharp
public string[] CidrRanges { get; set; }
```

- *Type:* string[]

IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header.

Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#cidr_ranges ComputePacketMirroring#cidr_ranges}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#direction ComputePacketMirroring#direction}

---

##### `IpProtocols`<sup>Optional</sup> <a name="IpProtocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.ipProtocols"></a>

```csharp
public string[] IpProtocols { get; set; }
```

- *Type:* string[]

Possible IP protocols including tcp, udp, icmp and esp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#ip_protocols ComputePacketMirroring#ip_protocols}

---

### ComputePacketMirroringMirroredResources <a name="ComputePacketMirroringMirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringMirroredResources {
    object Instances = null,
    object Subnetworks = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.instances">Instances</a></code> | <code>object</code> | instances block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.subnetworks">Subnetworks</a></code> | <code>object</code> | subnetworks block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.tags">Tags</a></code> | <code>string[]</code> | All instances with these tags will be mirrored. |

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.instances"></a>

```csharp
public object Instances { get; set; }
```

- *Type:* object

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#instances ComputePacketMirroring#instances}

---

##### `Subnetworks`<sup>Optional</sup> <a name="Subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.subnetworks"></a>

```csharp
public object Subnetworks { get; set; }
```

- *Type:* object

subnetworks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#subnetworks ComputePacketMirroring#subnetworks}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

All instances with these tags will be mirrored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#tags ComputePacketMirroring#tags}

---

### ComputePacketMirroringMirroredResourcesInstances <a name="ComputePacketMirroringMirroredResourcesInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringMirroredResourcesInstances {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.property.url">Url</a></code> | <code>string</code> | The URL of the instances where this rule should be active. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the instances where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringMirroredResourcesSubnetworks <a name="ComputePacketMirroringMirroredResourcesSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringMirroredResourcesSubnetworks {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.property.url">Url</a></code> | <code>string</code> | The URL of the subnetwork where this rule should be active. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the subnetwork where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringNetwork <a name="ComputePacketMirroringNetwork" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringNetwork {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.property.url">Url</a></code> | <code>string</code> | The full self_link URL of the network where this rule is active. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The full self_link URL of the network where this rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringTimeouts <a name="ComputePacketMirroringTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#create ComputePacketMirroring#create}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#delete ComputePacketMirroring#delete}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#update ComputePacketMirroring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#create ComputePacketMirroring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#delete ComputePacketMirroring#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_packet_mirroring#update ComputePacketMirroring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePacketMirroringCollectorIlbOutputReference <a name="ComputePacketMirroringCollectorIlbOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringCollectorIlbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.internalValue"></a>

```csharp
public ComputePacketMirroringCollectorIlb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---


### ComputePacketMirroringFilterOutputReference <a name="ComputePacketMirroringFilterOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetCidrRanges">ResetCidrRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetIpProtocols">ResetIpProtocols</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrRanges` <a name="ResetCidrRanges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetCidrRanges"></a>

```csharp
private void ResetCidrRanges()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetIpProtocols` <a name="ResetIpProtocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetIpProtocols"></a>

```csharp
private void ResetIpProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRangesInput">CidrRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocolsInput">IpProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRanges">CidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrRangesInput`<sup>Optional</sup> <a name="CidrRangesInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRangesInput"></a>

```csharp
public string[] CidrRangesInput { get; }
```

- *Type:* string[]

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `IpProtocolsInput`<sup>Optional</sup> <a name="IpProtocolsInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocolsInput"></a>

```csharp
public string[] IpProtocolsInput { get; }
```

- *Type:* string[]

---

##### `CidrRanges`<sup>Required</sup> <a name="CidrRanges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRanges"></a>

```csharp
public string[] CidrRanges { get; }
```

- *Type:* string[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocols"></a>

```csharp
public string[] IpProtocols { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.internalValue"></a>

```csharp
public ComputePacketMirroringFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---


### ComputePacketMirroringMirroredResourcesInstancesList <a name="ComputePacketMirroringMirroredResourcesInstancesList" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringMirroredResourcesInstancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get"></a>

```csharp
private ComputePacketMirroringMirroredResourcesInstancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePacketMirroringMirroredResourcesInstancesOutputReference <a name="ComputePacketMirroringMirroredResourcesInstancesOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringMirroredResourcesInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePacketMirroringMirroredResourcesOutputReference <a name="ComputePacketMirroringMirroredResourcesOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringMirroredResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances">PutInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks">PutSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks">ResetSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstances` <a name="PutInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances"></a>

```csharp
private void PutInstances(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances.parameter.value"></a>

- *Type:* object

---

##### `PutSubnetworks` <a name="PutSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks"></a>

```csharp
private void PutSubnetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetInstances"></a>

```csharp
private void ResetInstances()
```

##### `ResetSubnetworks` <a name="ResetSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks"></a>

```csharp
private void ResetSubnetworks()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instances">Instances</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList">ComputePacketMirroringMirroredResourcesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks">Subnetworks</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList">ComputePacketMirroringMirroredResourcesSubnetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput">InstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput">SubnetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instances"></a>

```csharp
public ComputePacketMirroringMirroredResourcesInstancesList Instances { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList">ComputePacketMirroringMirroredResourcesInstancesList</a>

---

##### `Subnetworks`<sup>Required</sup> <a name="Subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks"></a>

```csharp
public ComputePacketMirroringMirroredResourcesSubnetworksList Subnetworks { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList">ComputePacketMirroringMirroredResourcesSubnetworksList</a>

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput"></a>

```csharp
public object InstancesInput { get; }
```

- *Type:* object

---

##### `SubnetworksInput`<sup>Optional</sup> <a name="SubnetworksInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput"></a>

```csharp
public object SubnetworksInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.internalValue"></a>

```csharp
public ComputePacketMirroringMirroredResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---


### ComputePacketMirroringMirroredResourcesSubnetworksList <a name="ComputePacketMirroringMirroredResourcesSubnetworksList" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringMirroredResourcesSubnetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get"></a>

```csharp
private ComputePacketMirroringMirroredResourcesSubnetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePacketMirroringMirroredResourcesSubnetworksOutputReference <a name="ComputePacketMirroringMirroredResourcesSubnetworksOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringMirroredResourcesSubnetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputePacketMirroringNetworkOutputReference <a name="ComputePacketMirroringNetworkOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.internalValue"></a>

```csharp
public ComputePacketMirroringNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---


### ComputePacketMirroringTimeoutsOutputReference <a name="ComputePacketMirroringTimeoutsOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePacketMirroringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



