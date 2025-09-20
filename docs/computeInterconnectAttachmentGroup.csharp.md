# `computeInterconnectAttachmentGroup` Submodule <a name="`computeInterconnectAttachmentGroup` Submodule" id="@cdktf/provider-google.computeInterconnectAttachmentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnectAttachmentGroup <a name="ComputeInterconnectAttachmentGroup" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group google_compute_interconnect_attachment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroup(Construct Scope, string Id, ComputeInterconnectAttachmentGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig">ComputeInterconnectAttachmentGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig">ComputeInterconnectAttachmentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putAttachments">PutAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putIntent">PutIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetAttachments">ResetAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetInterconnectGroup">ResetInterconnectGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttachments` <a name="PutAttachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putAttachments"></a>

```csharp
private void PutAttachments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putAttachments.parameter.value"></a>

- *Type:* object

---

##### `PutIntent` <a name="PutIntent" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putIntent"></a>

```csharp
private void PutIntent(ComputeInterconnectAttachmentGroupIntent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeInterconnectAttachmentGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a>

---

##### `ResetAttachments` <a name="ResetAttachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetAttachments"></a>

```csharp
private void ResetAttachments()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterconnectGroup` <a name="ResetInterconnectGroup" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetInterconnectGroup"></a>

```csharp
private void ResetInterconnectGroup()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInterconnectAttachmentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInterconnectAttachmentGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInterconnectAttachmentGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInterconnectAttachmentGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeInterconnectAttachmentGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeInterconnectAttachmentGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInterconnectAttachmentGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInterconnectAttachmentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInterconnectAttachmentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.attachments">Attachments</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList">ComputeInterconnectAttachmentGroupAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.configured">Configured</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList">ComputeInterconnectAttachmentGroupConfiguredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.intent">Intent</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference">ComputeInterconnectAttachmentGroupIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.logicalStructure">LogicalStructure</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList">ComputeInterconnectAttachmentGroupLogicalStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference">ComputeInterconnectAttachmentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.attachmentsInput">AttachmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.intentInput">IntentInput</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.interconnectGroupInput">InterconnectGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.interconnectGroup">InterconnectGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.attachments"></a>

```csharp
public ComputeInterconnectAttachmentGroupAttachmentsList Attachments { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList">ComputeInterconnectAttachmentGroupAttachmentsList</a>

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.configured"></a>

```csharp
public ComputeInterconnectAttachmentGroupConfiguredList Configured { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList">ComputeInterconnectAttachmentGroupConfiguredList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.intent"></a>

```csharp
public ComputeInterconnectAttachmentGroupIntentOutputReference Intent { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference">ComputeInterconnectAttachmentGroupIntentOutputReference</a>

---

##### `LogicalStructure`<sup>Required</sup> <a name="LogicalStructure" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.logicalStructure"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructureList LogicalStructure { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList">ComputeInterconnectAttachmentGroupLogicalStructureList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.timeouts"></a>

```csharp
public ComputeInterconnectAttachmentGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference">ComputeInterconnectAttachmentGroupTimeoutsOutputReference</a>

---

##### `AttachmentsInput`<sup>Optional</sup> <a name="AttachmentsInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.attachmentsInput"></a>

```csharp
public object AttachmentsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntentInput`<sup>Optional</sup> <a name="IntentInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.intentInput"></a>

```csharp
public ComputeInterconnectAttachmentGroupIntent IntentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a>

---

##### `InterconnectGroupInput`<sup>Optional</sup> <a name="InterconnectGroupInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.interconnectGroupInput"></a>

```csharp
public string InterconnectGroupInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterconnectGroup`<sup>Required</sup> <a name="InterconnectGroup" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.interconnectGroup"></a>

```csharp
public string InterconnectGroup { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectAttachmentGroupAttachments <a name="ComputeInterconnectAttachmentGroupAttachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupAttachments {
    string Name,
    string Attachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#name ComputeInterconnectAttachmentGroup#name}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.property.attachment">Attachment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#attachment ComputeInterconnectAttachmentGroup#attachment}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#name ComputeInterconnectAttachmentGroup#name}.

---

##### `Attachment`<sup>Optional</sup> <a name="Attachment" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.property.attachment"></a>

```csharp
public string Attachment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#attachment ComputeInterconnectAttachmentGroup#attachment}.

---

### ComputeInterconnectAttachmentGroupConfig <a name="ComputeInterconnectAttachmentGroupConfig" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ComputeInterconnectAttachmentGroupIntent Intent,
    string Name,
    object Attachments = null,
    string Description = null,
    string Id = null,
    string InterconnectGroup = null,
    string Project = null,
    ComputeInterconnectAttachmentGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.intent">Intent</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.attachments">Attachments</a></code> | <code>object</code> | attachments block. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#id ComputeInterconnectAttachmentGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.interconnectGroup">InterconnectGroup</a></code> | <code>string</code> | The URL of an InterconnectGroup that groups these Attachments' Interconnects. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#project ComputeInterconnectAttachmentGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.intent"></a>

```csharp
public ComputeInterconnectAttachmentGroupIntent Intent { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#intent ComputeInterconnectAttachmentGroup#intent}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#name ComputeInterconnectAttachmentGroup#name}

---

##### `Attachments`<sup>Optional</sup> <a name="Attachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.attachments"></a>

```csharp
public object Attachments { get; set; }
```

- *Type:* object

attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#attachments ComputeInterconnectAttachmentGroup#attachments}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#description ComputeInterconnectAttachmentGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#id ComputeInterconnectAttachmentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterconnectGroup`<sup>Optional</sup> <a name="InterconnectGroup" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.interconnectGroup"></a>

```csharp
public string InterconnectGroup { get; set; }
```

- *Type:* string

The URL of an InterconnectGroup that groups these Attachments' Interconnects.

Customers do not need to set this unless directed by
Google Support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#interconnect_group ComputeInterconnectAttachmentGroup#interconnect_group}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#project ComputeInterconnectAttachmentGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.timeouts"></a>

```csharp
public ComputeInterconnectAttachmentGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#timeouts ComputeInterconnectAttachmentGroup#timeouts}

---

### ComputeInterconnectAttachmentGroupConfigured <a name="ComputeInterconnectAttachmentGroupConfigured" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfigured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfigured.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfigured {

};
```


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla {

};
```


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers {

};
```


### ComputeInterconnectAttachmentGroupIntent <a name="ComputeInterconnectAttachmentGroupIntent" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupIntent {
    string AvailabilitySla = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent.property.availabilitySla">AvailabilitySla</a></code> | <code>string</code> | Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]. |

---

##### `AvailabilitySla`<sup>Optional</sup> <a name="AvailabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent.property.availabilitySla"></a>

```csharp
public string AvailabilitySla { get; set; }
```

- *Type:* string

Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#availability_sla ComputeInterconnectAttachmentGroup#availability_sla}

---

### ComputeInterconnectAttachmentGroupLogicalStructure <a name="ComputeInterconnectAttachmentGroupLogicalStructure" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructure {

};
```


### ComputeInterconnectAttachmentGroupLogicalStructureRegions <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegions" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegions {

};
```


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros {

};
```


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities {

};
```


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones {

};
```


### ComputeInterconnectAttachmentGroupTimeouts <a name="ComputeInterconnectAttachmentGroupTimeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#create ComputeInterconnectAttachmentGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#delete ComputeInterconnectAttachmentGroup#delete}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#update ComputeInterconnectAttachmentGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#create ComputeInterconnectAttachmentGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#delete ComputeInterconnectAttachmentGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_interconnect_attachment_group#update ComputeInterconnectAttachmentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectAttachmentGroupAttachmentsList <a name="ComputeInterconnectAttachmentGroupAttachmentsList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.get"></a>

```csharp
private ComputeInterconnectAttachmentGroupAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInterconnectAttachmentGroupAttachmentsOutputReference <a name="ComputeInterconnectAttachmentGroupAttachmentsOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resetAttachment">ResetAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachment` <a name="ResetAttachment" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resetAttachment"></a>

```csharp
private void ResetAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachmentInput">AttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachment">Attachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentInput`<sup>Optional</sup> <a name="AttachmentInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachmentInput"></a>

```csharp
public string AttachmentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachment"></a>

```csharp
public string Attachment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get"></a>

```csharp
private ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.attachments">Attachments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.blockerType">BlockerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.documentationLink">DocumentationLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.explanation">Explanation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.metros">Metros</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.attachments"></a>

```csharp
public string[] Attachments { get; }
```

- *Type:* string[]

---

##### `BlockerType`<sup>Required</sup> <a name="BlockerType" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.blockerType"></a>

```csharp
public string BlockerType { get; }
```

- *Type:* string

---

##### `DocumentationLink`<sup>Required</sup> <a name="DocumentationLink" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.documentationLink"></a>

```csharp
public string DocumentationLink { get; }
```

- *Type:* string

---

##### `Explanation`<sup>Required</sup> <a name="Explanation" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.explanation"></a>

```csharp
public string Explanation { get; }
```

- *Type:* string

---

##### `Metros`<sup>Required</sup> <a name="Metros" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.metros"></a>

```csharp
public string[] Metros { get; }
```

- *Type:* string[]

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers</a>

---


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get"></a>

```csharp
private ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.effectiveSla">EffectiveSla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.intendedSlaBlockers">IntendedSlaBlockers</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveSla`<sup>Required</sup> <a name="EffectiveSla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.effectiveSla"></a>

```csharp
public string EffectiveSla { get; }
```

- *Type:* string

---

##### `IntendedSlaBlockers`<sup>Required</sup> <a name="IntendedSlaBlockers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.intendedSlaBlockers"></a>

```csharp
public ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList IntendedSlaBlockers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla</a>

---


### ComputeInterconnectAttachmentGroupConfiguredList <a name="ComputeInterconnectAttachmentGroupConfiguredList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfiguredList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.get"></a>

```csharp
private ComputeInterconnectAttachmentGroupConfiguredOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupConfiguredOutputReference <a name="ComputeInterconnectAttachmentGroupConfiguredOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupConfiguredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.availabilitySla">AvailabilitySla</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfigured">ComputeInterconnectAttachmentGroupConfigured</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilitySla`<sup>Required</sup> <a name="AvailabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.availabilitySla"></a>

```csharp
public ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList AvailabilitySla { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectAttachmentGroupConfigured InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfigured">ComputeInterconnectAttachmentGroupConfigured</a>

---


### ComputeInterconnectAttachmentGroupIntentOutputReference <a name="ComputeInterconnectAttachmentGroupIntentOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupIntentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resetAvailabilitySla">ResetAvailabilitySla</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilitySla` <a name="ResetAvailabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resetAvailabilitySla"></a>

```csharp
private void ResetAvailabilitySla()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySlaInput">AvailabilitySlaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySla">AvailabilitySla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilitySlaInput`<sup>Optional</sup> <a name="AvailabilitySlaInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySlaInput"></a>

```csharp
public string AvailabilitySlaInput { get; }
```

- *Type:* string

---

##### `AvailabilitySla`<sup>Required</sup> <a name="AvailabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySla"></a>

```csharp
public string AvailabilitySla { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectAttachmentGroupIntent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureList <a name="ComputeInterconnectAttachmentGroupLogicalStructureList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.get"></a>

```csharp
private ComputeInterconnectAttachmentGroupLogicalStructureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.regions">Regions</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructure">ComputeInterconnectAttachmentGroupLogicalStructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.regions"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructureRegionsList Regions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructure InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructure">ComputeInterconnectAttachmentGroupLogicalStructure</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsList <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get"></a>

```csharp
private ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get"></a>

```csharp
private ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.facility">Facility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.zones">Zones</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Facility`<sup>Required</sup> <a name="Facility" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.facility"></a>

```csharp
public string Facility { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.zones"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList Zones { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get"></a>

```csharp
private ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachment">Attachment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachment"></a>

```csharp
public string[] Attachment { get; }
```

- *Type:* string[]

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get"></a>

```csharp
private ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.facilities">Facilities</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.metro">Metro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Facilities`<sup>Required</sup> <a name="Facilities" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.facilities"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList Facilities { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList</a>

---

##### `Metro`<sup>Required</sup> <a name="Metro" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.metro"></a>

```csharp
public string Metro { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.metros">Metros</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegions">ComputeInterconnectAttachmentGroupLogicalStructureRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metros`<sup>Required</sup> <a name="Metros" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.metros"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList Metros { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectAttachmentGroupLogicalStructureRegions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegions">ComputeInterconnectAttachmentGroupLogicalStructureRegions</a>

---


### ComputeInterconnectAttachmentGroupTimeoutsOutputReference <a name="ComputeInterconnectAttachmentGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeInterconnectAttachmentGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



