# `computeNetworkAttachment` Submodule <a name="`computeNetworkAttachment` Submodule" id="@cdktf/provider-google.computeNetworkAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkAttachment <a name="ComputeNetworkAttachment" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment google_compute_network_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkAttachment(Construct Scope, string Id, ComputeNetworkAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig">ComputeNetworkAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig">ComputeNetworkAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetProducerAcceptLists">ResetProducerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetProducerRejectLists">ResetProducerRejectLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeNetworkAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeouts">ComputeNetworkAttachmentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetProducerAcceptLists` <a name="ResetProducerAcceptLists" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetProducerAcceptLists"></a>

```csharp
private void ResetProducerAcceptLists()
```

##### `ResetProducerRejectLists` <a name="ResetProducerRejectLists" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetProducerRejectLists"></a>

```csharp
private void ResetProducerRejectLists()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNetworkAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeNetworkAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetworkAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetworkAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetworkAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.connectionEndpoints">ConnectionEndpoints</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList">ComputeNetworkAttachmentConnectionEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference">ComputeNetworkAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.connectionPreferenceInput">ConnectionPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.producerAcceptListsInput">ProducerAcceptListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.producerRejectListsInput">ProducerRejectListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.subnetworksInput">SubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.connectionPreference">ConnectionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.producerAcceptLists">ProducerAcceptLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.producerRejectLists">ProducerRejectLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.subnetworks">Subnetworks</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectionEndpoints`<sup>Required</sup> <a name="ConnectionEndpoints" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.connectionEndpoints"></a>

```csharp
public ComputeNetworkAttachmentConnectionEndpointsList ConnectionEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList">ComputeNetworkAttachmentConnectionEndpointsList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.selfLinkWithId"></a>

```csharp
public string SelfLinkWithId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.timeouts"></a>

```csharp
public ComputeNetworkAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference">ComputeNetworkAttachmentTimeoutsOutputReference</a>

---

##### `ConnectionPreferenceInput`<sup>Optional</sup> <a name="ConnectionPreferenceInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.connectionPreferenceInput"></a>

```csharp
public string ConnectionPreferenceInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProducerAcceptListsInput`<sup>Optional</sup> <a name="ProducerAcceptListsInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.producerAcceptListsInput"></a>

```csharp
public string[] ProducerAcceptListsInput { get; }
```

- *Type:* string[]

---

##### `ProducerRejectListsInput`<sup>Optional</sup> <a name="ProducerRejectListsInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.producerRejectListsInput"></a>

```csharp
public string[] ProducerRejectListsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubnetworksInput`<sup>Optional</sup> <a name="SubnetworksInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.subnetworksInput"></a>

```csharp
public string[] SubnetworksInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.connectionPreference"></a>

```csharp
public string ConnectionPreference { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProducerAcceptLists`<sup>Required</sup> <a name="ProducerAcceptLists" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.producerAcceptLists"></a>

```csharp
public string[] ProducerAcceptLists { get; }
```

- *Type:* string[]

---

##### `ProducerRejectLists`<sup>Required</sup> <a name="ProducerRejectLists" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.producerRejectLists"></a>

```csharp
public string[] ProducerRejectLists { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Subnetworks`<sup>Required</sup> <a name="Subnetworks" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.subnetworks"></a>

```csharp
public string[] Subnetworks { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkAttachmentConfig <a name="ComputeNetworkAttachmentConfig" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionPreference,
    string Name,
    string[] Subnetworks,
    string Description = null,
    string[] ProducerAcceptLists = null,
    string[] ProducerRejectLists = null,
    string Project = null,
    string Region = null,
    ComputeNetworkAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.connectionPreference">ConnectionPreference</a></code> | <code>string</code> | The connection preference of service attachment. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.subnetworks">Subnetworks</a></code> | <code>string[]</code> | An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.producerAcceptLists">ProducerAcceptLists</a></code> | <code>string[]</code> | Projects that are allowed to connect to this network attachment. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.producerRejectLists">ProducerRejectLists</a></code> | <code>string[]</code> | Projects that are not allowed to connect to this network attachment. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#project ComputeNetworkAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.region">Region</a></code> | <code>string</code> | URL of the region where the network attachment resides. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeouts">ComputeNetworkAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.connectionPreference"></a>

```csharp
public string ConnectionPreference { get; set; }
```

- *Type:* string

The connection preference of service attachment.

The value can be set to ACCEPT_AUTOMATIC. An ACCEPT_AUTOMATIC service attachment is one that always accepts the connection from consumer forwarding rules. Possible values: ["ACCEPT_AUTOMATIC", "ACCEPT_MANUAL", "INVALID"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#connection_preference ComputeNetworkAttachment#connection_preference}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#name ComputeNetworkAttachment#name}

---

##### `Subnetworks`<sup>Required</sup> <a name="Subnetworks" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.subnetworks"></a>

```csharp
public string[] Subnetworks { get; set; }
```

- *Type:* string[]

An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#subnetworks ComputeNetworkAttachment#subnetworks}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#description ComputeNetworkAttachment#description}

---

##### `ProducerAcceptLists`<sup>Optional</sup> <a name="ProducerAcceptLists" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.producerAcceptLists"></a>

```csharp
public string[] ProducerAcceptLists { get; set; }
```

- *Type:* string[]

Projects that are allowed to connect to this network attachment.

The project can be specified using its id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#producer_accept_lists ComputeNetworkAttachment#producer_accept_lists}

---

##### `ProducerRejectLists`<sup>Optional</sup> <a name="ProducerRejectLists" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.producerRejectLists"></a>

```csharp
public string[] ProducerRejectLists { get; set; }
```

- *Type:* string[]

Projects that are not allowed to connect to this network attachment.

The project can be specified using its id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#producer_reject_lists ComputeNetworkAttachment#producer_reject_lists}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#project ComputeNetworkAttachment#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

URL of the region where the network attachment resides.

This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#region ComputeNetworkAttachment#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConfig.property.timeouts"></a>

```csharp
public ComputeNetworkAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeouts">ComputeNetworkAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#timeouts ComputeNetworkAttachment#timeouts}

---

### ComputeNetworkAttachmentConnectionEndpoints <a name="ComputeNetworkAttachmentConnectionEndpoints" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkAttachmentConnectionEndpoints {

};
```


### ComputeNetworkAttachmentTimeouts <a name="ComputeNetworkAttachmentTimeouts" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#create ComputeNetworkAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#delete ComputeNetworkAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#create ComputeNetworkAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_network_attachment#delete ComputeNetworkAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkAttachmentConnectionEndpointsList <a name="ComputeNetworkAttachmentConnectionEndpointsList" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkAttachmentConnectionEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.get"></a>

```csharp
private ComputeNetworkAttachmentConnectionEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeNetworkAttachmentConnectionEndpointsOutputReference <a name="ComputeNetworkAttachmentConnectionEndpointsOutputReference" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkAttachmentConnectionEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.secondaryIpCidrRanges">SecondaryIpCidrRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpoints">ComputeNetworkAttachmentConnectionEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `ProjectIdOrNum`<sup>Required</sup> <a name="ProjectIdOrNum" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.projectIdOrNum"></a>

```csharp
public string ProjectIdOrNum { get; }
```

- *Type:* string

---

##### `SecondaryIpCidrRanges`<sup>Required</sup> <a name="SecondaryIpCidrRanges" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.secondaryIpCidrRanges"></a>

```csharp
public string SecondaryIpCidrRanges { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpointsOutputReference.property.internalValue"></a>

```csharp
public ComputeNetworkAttachmentConnectionEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentConnectionEndpoints">ComputeNetworkAttachmentConnectionEndpoints</a>

---


### ComputeNetworkAttachmentTimeoutsOutputReference <a name="ComputeNetworkAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkAttachment.ComputeNetworkAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



