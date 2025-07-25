# `computeResourcePolicyAttachment` Submodule <a name="`computeResourcePolicyAttachment` Submodule" id="@cdktf/provider-google.computeResourcePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeResourcePolicyAttachment <a name="ComputeResourcePolicyAttachment" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment google_compute_resource_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResourcePolicyAttachment(Construct Scope, string Id, ComputeResourcePolicyAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig">ComputeResourcePolicyAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig">ComputeResourcePolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeResourcePolicyAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeouts">ComputeResourcePolicyAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeResourcePolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeResourcePolicyAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeResourcePolicyAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeResourcePolicyAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeResourcePolicyAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeResourcePolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeResourcePolicyAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeResourcePolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeResourcePolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference">ComputeResourcePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.timeouts"></a>

```csharp
public ComputeResourcePolicyAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference">ComputeResourcePolicyAttachmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeResourcePolicyAttachmentConfig <a name="ComputeResourcePolicyAttachmentConfig" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResourcePolicyAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Instance,
    string Name,
    string Id = null,
    string Project = null,
    ComputeResourcePolicyAttachmentTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.instance">Instance</a></code> | <code>string</code> | The name of the instance in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.name">Name</a></code> | <code>string</code> | The resource policy to be attached to the instance for scheduling start/stop operations. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#id ComputeResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#project ComputeResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeouts">ComputeResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.zone">Zone</a></code> | <code>string</code> | A reference to the zone where the instance resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The name of the instance in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#instance ComputeResourcePolicyAttachment#instance}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource policy to be attached to the instance for scheduling start/stop operations. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#name ComputeResourcePolicyAttachment#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#id ComputeResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#project ComputeResourcePolicyAttachment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.timeouts"></a>

```csharp
public ComputeResourcePolicyAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeouts">ComputeResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#timeouts ComputeResourcePolicyAttachment#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

A reference to the zone where the instance resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#zone ComputeResourcePolicyAttachment#zone}

---

### ComputeResourcePolicyAttachmentTimeouts <a name="ComputeResourcePolicyAttachmentTimeouts" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResourcePolicyAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#create ComputeResourcePolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#delete ComputeResourcePolicyAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#create ComputeResourcePolicyAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy_attachment#delete ComputeResourcePolicyAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeResourcePolicyAttachmentTimeoutsOutputReference <a name="ComputeResourcePolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeResourcePolicyAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicyAttachment.ComputeResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



