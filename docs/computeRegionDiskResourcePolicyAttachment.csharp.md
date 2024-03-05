# `computeRegionDiskResourcePolicyAttachment` Submodule <a name="`computeRegionDiskResourcePolicyAttachment` Submodule" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionDiskResourcePolicyAttachment <a name="ComputeRegionDiskResourcePolicyAttachment" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment google_compute_region_disk_resource_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionDiskResourcePolicyAttachment(Construct Scope, string Id, ComputeRegionDiskResourcePolicyAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig">ComputeRegionDiskResourcePolicyAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig">ComputeRegionDiskResourcePolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionDiskResourcePolicyAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionDiskResourcePolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionDiskResourcePolicyAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionDiskResourcePolicyAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionDiskResourcePolicyAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionDiskResourcePolicyAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRegionDiskResourcePolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionDiskResourcePolicyAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionDiskResourcePolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionDiskResourcePolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference">ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.diskInput">DiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.disk">Disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.timeouts"></a>

```csharp
public ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference">ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference</a>

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.diskInput"></a>

```csharp
public string DiskInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.disk"></a>

```csharp
public string Disk { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionDiskResourcePolicyAttachmentConfig <a name="ComputeRegionDiskResourcePolicyAttachmentConfig" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionDiskResourcePolicyAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Disk,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null,
    ComputeRegionDiskResourcePolicyAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.disk">Disk</a></code> | <code>string</code> | The name of the regional disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.name">Name</a></code> | <code>string</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#id ComputeRegionDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#project ComputeRegionDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.region">Region</a></code> | <code>string</code> | A reference to the region where the disk resides. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.disk"></a>

```csharp
public string Disk { get; set; }
```

- *Type:* string

The name of the regional disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#disk ComputeRegionDiskResourcePolicyAttachment#disk}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#name ComputeRegionDiskResourcePolicyAttachment#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#id ComputeRegionDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#project ComputeRegionDiskResourcePolicyAttachment#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#region ComputeRegionDiskResourcePolicyAttachment#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentConfig.property.timeouts"></a>

```csharp
public ComputeRegionDiskResourcePolicyAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts">ComputeRegionDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#timeouts ComputeRegionDiskResourcePolicyAttachment#timeouts}

---

### ComputeRegionDiskResourcePolicyAttachmentTimeouts <a name="ComputeRegionDiskResourcePolicyAttachmentTimeouts" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionDiskResourcePolicyAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#create ComputeRegionDiskResourcePolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#delete ComputeRegionDiskResourcePolicyAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#create ComputeRegionDiskResourcePolicyAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_region_disk_resource_policy_attachment#delete ComputeRegionDiskResourcePolicyAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference <a name="ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionDiskResourcePolicyAttachment.ComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



